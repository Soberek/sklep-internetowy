import type { Product } from "../types/product";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllProducts = async ({ path }: { path?: string }): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/${path}`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = await response.json();
  return data.products;
};

export const fetchSearchedProducts: (query: string) => Promise<Product[]> = async (query: string) => {
  const response = await fetch(`${API_URL}/products/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = await response.json();
  return data.products;
};
