import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import { Navbar } from "./layout/Navbar";
import { AccesoriesPage } from "./pages/Accesories/AccesoriesPage";

import { CartPage } from "./pages/Cart/CartPage";
import { ClientAccPage } from "./pages/Client/ClientAccPage";
import { ForManPage } from "./pages/ForMan/ForManPage";
import { ForWomanPage } from "./pages/ForWoman/ForWomanPage";
import { HomePage } from "./pages/Home/HomePage";
import { ItemPage } from "./pages/Item/ItemPage";
import { WishListPage } from "./pages/WishList/WishListPage";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ShopProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />

            <Route element={<ForWomanPage />} path="/forwoman" />

            <Route element={<ItemPage />} path="/:category/:itemId" />

            <Route element={<ForManPage />} path="/forman" />

            <Route element={<AccesoriesPage />} path="/accesories" />

            <Route element={<WishListPage />} path="/wishlist" />

            <Route element={<CartPage />} path="/cart" />

            <Route element={<ClientAccPage />} path="/account" />

            <Route element={<div>Not found</div>} path="*" />
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </ChakraProvider>
  );
}

export default App;
