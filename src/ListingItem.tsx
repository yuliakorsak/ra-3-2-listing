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

export default function ListingItem(props: { item: ListingItemProps & any }) {
  try {
    const priceTag: string = props.item.currency_code === 'USD' ? `$${props.item.price}`
      : props.item.currency_code === 'EUR' ? `€${props.item.price}`
        : `${props.item.price} ${props.item.currency_code}`;

    const level: string = `item-quantity level-${props.item.quantity <= 10 ? 'low '
      : props.item.quantity <= 20 ? 'medium' : 'high'}`;

    const title = props.item.title.length > 50 
    ? props.item.title.slice(0, 50) + '...'
    : props.item.title;

    return (
      <div className="item">
        <div className="item-image">
          <a href={props.item.url}>
            <img src={props.item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{priceTag}</p>
          <p className={level}>{props.item.quantity} left</p>
        </div>
      </div>
    )
  }
  catch (e) {
    console.error(`Unable to load item. listing_id: ${props.item.listing_id}.`, e);
  }
}
