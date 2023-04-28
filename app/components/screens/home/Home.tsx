import { IProduct } from "../../../store/product/products.types";
import { Product } from "./Product";
import Header from "./Header";
import { useGetProductsQuery } from "../../../store/product/product.api";
import { FC } from "react";

const Home: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(6);

  return (
    <>
      <Header />

      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div className="text-red"></div>
      ) : (
        <div className="grid grid-cols-2 min-[425px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
          {data?.map((product: IProduct) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};
export default Home;
