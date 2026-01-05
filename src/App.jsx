import "./App.css";
import { Header, Footer, ProductList } from "./components";
import Products from "./data/products";

function App() {
  return (
    <>
      <Header />
      <ProductList Products={Products} />
      <Footer />
    </>
  );
}

export default App;
