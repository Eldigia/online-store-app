import { createContext, useContext, useEffect, useState } from "react";
import { get } from "lodash";

type SortType = "id" | "lowprice" | "highprice" | "rating";

type ShopContextValues = {
  items: Product[];
  wishlist: Product[];
  setWishlist(wishlist: Product[]): void;
  setSortType(sortType: SortType): void;
  sortType: SortType;
};

const ShopContext = createContext<ShopContextValues>({});

export function useShopContext() {
  return useContext(ShopContext);
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export function ShopProvider({ children }: any) {
  const [items, setItems] = useState<Product[]>([]);
  const [sortType, setSortType] = useState<SortType>("id");
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    fetchAllItems();
  }, []);

  async function fetchAllItems() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await res.json();
    setItems(data);
  }

  const types = {
    id: "id",
    lowprice: "price",
    highprice: "price",
    rating: "rating.rate",
  };

  const sortProperty = types[sortType];

  let sorted = [];

  if (sortType !== "highprice") {
    sorted = [...items].sort((a, b) => get(a, sortProperty) - get(b, sortProperty));
  } else {
    sorted = [...items].sort((a, b) => get(b, sortProperty) - get(a, sortProperty));
  }

  const value = { items: sorted, wishlist, setWishlist, setSortType, sortType };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export default ShopContext;
