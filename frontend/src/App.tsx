import { PRODUCTS } from "./constants";

function App() {
  return (
    <div>
      <ul>
      {PRODUCTS.map((product) => (
        <li key={product.title}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img width={400} height={400} src={product.image} alt={product.title} />
          <h5>Price: {product.price}$</h5>
          <h6>
            Variants: {product.variants.join(", ")}
          </h6>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
