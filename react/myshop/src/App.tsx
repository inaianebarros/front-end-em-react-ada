import React from "react";
import { Provider } from "react-redux";
import { Globalstyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProdutsList";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Globalstyles />
      <Header />
      <ProductsList />
    </Provider>
  );
}

export default App;
