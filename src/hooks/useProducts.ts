import { useState, useEffect } from "react";
import {
  fetchAllProducts,
  fetchSearchedProducts,
} from "../services/apiService";
import type { Product } from "../types/product";

export const useProducts = (searchTerm?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const loadProducts = async () => {
      try {
        const data = searchTerm
          ? await fetchSearchedProducts(searchTerm)
          : await fetchAllProducts();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [searchTerm]);

  return { products, loading, error };
};
