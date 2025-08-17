import React from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { useAllProducts } from "./hooks/useAllProducts";
import { useSearchedProducts } from "./hooks/useSearchedProducts";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const {
    products: featuredProducts,
    loading: loadingFeatured,
    error: errorFeatured,
  } = useAllProducts({
    path: "products?limit=6",
  });

  const {
    products: smartphonesProducts,
    loading: loadingSmartphones,
    error: errorSmartphones,
  } = useAllProducts({
    path: "products/category/smartphones?limit=6",
  });

  const {
    products: searchedProducts,
    loading: searching,
    error: searchError,
  } = useSearchedProducts(searchTerm);

  return (
    <div className="min-h-screen bg-[#FFFFFF] max-w-[1280px] mx-auto">
      {/* Header */}
      <header className="flex justify-between w-full border-b-[1px] border-[#E5E8EB] pt-[12px] pr-[40px] pb-[12px] pl-[40px]">
        {/* Logo container */}
        <div className="flex items-center justify-center gap-[16px]">
          {/* Logo icon container */}

          <div className="w-[16px] h-[16px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H12L10 6L12 12H0L2 6L0 0Z"
                fill="#1C0D0F"
              />
            </svg>
          </div>

          {/* Logo text */}
          <h1
            className="text-xl text-[18px] font-[700] text-[#1C0D0F]"
            style={{ letterSpacing: "0px" }}
          >
            ShopOnline
          </h1>
        </div>
        <SearchBar onSearch={setSearchTerm} />
      </header>

      {/* Content container */}
      <main className="w-full h-[1299px] px-[160px] py-[20px]">
        {/* Products container */}
        <div className="mx-auto w-full max-w-[960px]">
          {/* Section header container */}

          {searchTerm && (
            <ProductList
              category="Search Results"
              products={searchedProducts}
              loading={searching}
              error={searchError}
            />
          )}

          {searchTerm === "" && (
            <>
              <ProductList
                category="Featured Products"
                products={featuredProducts}
                loading={loadingFeatured}
                error={errorFeatured}
              />

              <ProductList
                category="New Arrivals"
                products={smartphonesProducts}
                loading={loadingSmartphones}
                error={errorSmartphones}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
