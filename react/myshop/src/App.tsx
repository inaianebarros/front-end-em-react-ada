import React from "react";
import { Globalstyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProdutsList";

function App() {
  return (
    <>
      <Globalstyles />
      <Header />
      <ProductsList />
    </>
  );
}

export default App;
