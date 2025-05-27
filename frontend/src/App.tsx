import { FooterHelp, Link } from "@shopify/polaris";
import { Route, Routes } from "react-router";
import { Products } from "./pages/products";
import { ProductDetails } from "./pages/product-details";

function App() {
  return (
    <main style={{ minHeight: "100dvh" }}>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <FooterHelp>
        Developed by <Link url="https://www.partnerz.io/">Partnerz</Link>
      </FooterHelp>
    </main>
  );
}

export default App;
