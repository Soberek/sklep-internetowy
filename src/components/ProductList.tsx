import React from "react";
import type { Product } from "../types/product";

type Props = {
  category: string;
  products: Product[];
  loading: boolean;
  error: string | null;
};

const ProductList: React.FC<Props> = ({
  category,
  products,
  loading,
  error,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    // Product list container
    <>
      <div className="w-full h-[60px] pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
        <h2
          className="text-[#1C0D0F] text-xl font-[700] text-[22px] mb-4"
          style={{ lineHeight: "28px", letterSpacing: "0px" }}
        >
          {category}
        </h2>
      </div>
      <div className="flex flex-wrap w-full p-[16px] gap-[12px]">
        {products.map((product) => (
          // Product card container
          <div className="flex flex-col gap-[12px]" key={product.id}>
            {/* Product image container */}
            <div className="flex flex-col w-[176px] h-full pb-[12px] gap-[12px]">
              {/* Product image */}
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[176px] h-[176px] rounded-[12px] object-cover mb-2"
              />
              <div>
                <p
                  className="text-[16px] line-[24px] font-[500] text-[#1C0D0F]"
                  style={{ letterSpacing: "0px" }}
                >
                  {product.title}
                </p>
                <p
                  className="text-[14px] font-[400] text-[#964F52]"
                  style={{ lineHeight: "21px", letterSpacing: "0px" }}
                >
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
