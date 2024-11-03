import { ReactElement } from 'react';
import ListingItem, { ListingItemProps } from './ListingItem';

export default function Listing({ items }: { items: Array<ListingItemProps> }) {

  const itemList: Array<ReactElement> = [];
  items.forEach(item => itemList.push(<ListingItem item={item} key={item.listing_id} />));

  return (
    <div className="item-list">
      {itemList}
    </div>
  );
}
