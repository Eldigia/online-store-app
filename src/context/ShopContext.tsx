import { createContext, useContext, useEffect, useState } from "react";
import { get } from "lodash";

export type SortType = "id" | "lowprice" | "highprice" | "rating";

type ShopContextValues = {
  items: Product[];
  wishlist: Product[];
  cartItems: MappedCartItem[];
  setWishlist(wishlist: Product[]): void;
  setCartItems(iteamCart: CartItem[]): void;
  setSortType(sortType: SortType): void;
  sortType: SortType;
};

const ShopContext = createContext<ShopContextValues>({
  items: [],
  wishlist: [],
  cartItems: [],
  setWishlist() {},
  setCartItems() {},
  setSortType() {},
  sortType: "id",
});

export function useShopContext() {
  return useContext(ShopContext);
}

export type Product = {
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

export type CartItem = {
  id: Product["id"];
  quantity: number;
};

export type MappedCartItem = {
  item: Product;
} & CartItem;

export function ShopProvider({ children }: any) {
  const [items, setItems] = useState<Product[]>([]);
  const [sortType, setSortType] = useState<SortType>("id");
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const mappedCartItems = cartItems.map((cartItem) => ({
    ...cartItem,
    item: items.find(({ id }) => id === cartItem.id)!,
  }));

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

  const value = {
    items: sorted,
    wishlist,
    setWishlist,
    setCartItems,
    setSortType,
    sortType,
    cartItems: mappedCartItems,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export default ShopContext;
