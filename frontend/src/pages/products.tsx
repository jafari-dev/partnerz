import { PRODUCTS } from "../constants";
import { Page, Grid } from "@shopify/polaris";
import { ProductCard } from "../components";
import { memo } from "react";

const ProductsPage = () => {
  return (
    <Page fullWidth title="Products" subtitle="List of mock products">
      <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
        {PRODUCTS.map((product) => (
          <Grid.Cell key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              variants={product.variants}
            />
          </Grid.Cell>
        ))}
      </Grid>
    </Page>
  );
}

export const Products = memo(ProductsPage);
