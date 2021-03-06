import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import { Navbar } from "./layout/Navbar";
import { AccesoriesPage } from "./pages/Accesories/AccesoriesPage";

import { CartPage } from "./pages/Cart/CartPage";
import { ClientAccPage } from "./pages/Client/ClientAccPage";
import { ForMenPage } from "./pages/ForMen/ForMenPage";
import { ForWomenPage } from "./pages/ForWomen/ForWomenPage";
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

            <Route element={<ForWomenPage />} path="/forwomen" />

            <Route element={<ItemPage />} path="/:category/:itemId" />

            <Route element={<ForMenPage />} path="/formen" />

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
