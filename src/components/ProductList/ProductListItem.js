import { Link } from "react-router-dom";

export function ProductListItem({ id, title, price, address, thumbnail }) {
  return (
    <Link to={id}>
      <article
        className="flex w-full h-[150px] items-center justify-between"
      >
        <div className=" p-[10px] h-full">
          <img
            className="flex h-full w-[150px] rounded-lg  "
            src={thumbnail}
            alt={title}
          />
        </div>
        <div className="flex flex-col items-start w-full p-[20px]">
          <p>$ {price}</p>
          <p>{title}</p>
        </div>
        <div className="flex flex-col w-[200px]">
          <p className="">{address.state_name}</p>
        </div>
      </article>
    </Link>
  );
}
