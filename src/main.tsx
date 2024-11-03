import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/main.css';
import Listing from './Listing.tsx';
import data from './data/etsy.json';
import { ListingItemProps } from './ListingItem';

const validData: Array<ListingItemProps> = [];
data.forEach((item) => {
  if (item.listing_id && item.url
    && item.MainImage && item.title && item.currency_code
    && item.price && item.quantity) {
    validData.push({
      listing_id: item.listing_id,
      url: item.url,
      MainImage: { url_570xN: item.MainImage?.url_570xN },
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity
    });
  }
}
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Listing items={validData} />
  </StrictMode>,
)
