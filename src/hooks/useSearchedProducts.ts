import { useState, useEffect } from "react";
import { fetchSearchedProducts } from "../services/apiService";
import type { Product } from "../types/product";

export const useSearchedProducts = (query: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchSearchedProducts(query)
      .then(setProducts)
      .catch((err) => setError((err as Error).message))
      .finally(() => setLoading(false));
  }, [query]);

  return { products, loading, error };
};
