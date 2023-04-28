import React, { useState } from "react";
import { IProduct } from "../../../store/product/products.types";
import { useActions } from "@/app/hooks/useActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { FC } from "react";

export const Product: FC<{ product: IProduct }> = ({ product }) => {
  const { addItem } = useActions();
  const { cart } = useTypedSelector((state) => state);
  const isExistInCart = cart.some((p) => p.id === product.id);

  const [details, setDetails] = useState(false);
  const btnClassName = details ? "bg-blue-300" : "bg-yellow-300";
  const btnClasses = ["py-1 px-3 rounded-xl", btnClassName];
  return (
    <div
      style={{ backgroundColor: "rgb(232 239 234)" }}
      className="bg-green-200 min-h-[350px] md:min-h-[400px]  relative pb-3 pt-6 overflow-hidden rounded-2xl flex flex-col justify-between items-center mb-2"
    >
      <div className="flex flex-col items-center mb-2 w-full">
        <img
          src={product.image}
          className="w-2/3 h-44 object-cover rounded-2xl t-0 l-0"
          alt={product.title}
        />
        <p className="px-2 py-2">{product.title}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-center mb-2 text-green-900">
          {new Intl.NumberFormat("ru-Ru", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
        <p style={{ textAlign: "center", marginBottom: "5px" }}>
          rate:
          <span style={{ fontWeight: "bold" }}> {product?.rating?.rate}</span>
        </p>
        <button
          onClick={() => setDetails((prev) => !prev)}
          className={btnClasses.join(" ")}
        >
          {details ? "hide details" : "show details"}
        </button>
        <button
          onClick={() => !isExistInCart && addItem(product)}
          className="text-sm bg-white hover:bg-green-200 transition py-1 px-3 mt-2 rounded-xl block"
        >
          {isExistInCart ? "Already in cart" : "Add to cart"}
        </button>
      </div>
      {details && (
        <div
          style={{ backgroundColor: "rgb(232 239 234)" }}
          className="absolute t-0 l-0 px-2 pt-2 h-[285px] md:h-[330px] text-xs"
        >
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};
