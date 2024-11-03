export interface ListingItemProps {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

export default function ListingItem({ item }: { item: ListingItemProps }) {
  const priceTag: string = item.currency_code === 'USD' ? `$${item.price}`
    : item.currency_code === 'EUR' ? `€${item.price}`
      : `${item.price} ${item.currency_code}`;

  const level: string = `item-quantity level-${item.quantity <= 10 ? 'low '
    : item.quantity <= 20 ? 'medium' : 'high'}`;

  const cropTitle = item.title.length > 50
    ? item.title.slice(0, 50) + '...'
    : item.title;

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{cropTitle}</p>
        <p className="item-price">{priceTag}</p>
        <p className={level}>{item.quantity} left</p>
      </div>
    </div>
  );
}
