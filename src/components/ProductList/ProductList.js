import { ProductListItem } from "./ProductListItem";

export function ProductList({ products }) {
  return products ? (
    <div className="container">
      {products.map(({ id, title, price, address, thumbnail }) => {
        return (
          <ProductListItem
            key={id}
            id={id}
            title={title}
            price={price}
            address={address}
            thumbnail={thumbnail}
          />
        );
      })}
    </div>
  ) : (
    <div className="container">Loading...</div>
  );
}
