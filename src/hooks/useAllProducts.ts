import { useState, useEffect } from "react";
import { fetchAllProducts } from "../services/apiService";
import type { Product } from "../types/product";

export const useAllProducts = ({ path }: { path: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchAllProducts({ path })
      .then(setProducts)
      .catch((err) => setError((err as Error).message))
      .finally(() => setLoading(false));
  }, [path]);

  return { products, loading, error };
};
