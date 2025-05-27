import { PRODUCTS } from "./constants";
import {
  Card,
  Image,
  Text,
  Badge,
  Page,
  Grid,
  Button,
  Divider,
  InlineStack,
  BlockStack,
} from "@shopify/polaris";

function App() {
  return (
    <Page fullWidth title="Products" subtitle="List of mock products">
      <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
        {PRODUCTS.map((product) => (
          <Grid.Cell key={product.title}>
            <Card>
              <BlockStack gap="200">
                <Text as="h2" truncate>
                  {product.title}
                </Text>
                <Divider borderColor="border-brand" />
                <Text as="p" truncate>
                  {product.description}
                </Text>
                <Image
                  alt={product.title}
                  source={product.image}
                  width={160}
                  height={160}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    borderRadius: 8,
                  }}
                />
                <Text as="h5">
                  Price: <Text as="strong">{product.price}$</Text>
                </Text>
                <InlineStack direction="row" gap="200">
                  {product.variants.map((variant) => (
                    <Badge key={variant} tone="info">
                      {variant}
                    </Badge>
                  ))}
                </InlineStack>
                <Divider borderColor="border-brand" />
                <Button variant="primary">See Details</Button>
              </BlockStack>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </Page>
  );
}

export default App;
