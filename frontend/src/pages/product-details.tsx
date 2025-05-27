import { memo, useMemo, type FC } from "react";
import { Link, useParams } from "react-router";
import {
  Image,
  Text,
  Badge,
  InlineStack,
  BlockStack,
  Page,
  Button,
  Box,
} from "@shopify/polaris";
import { PRODUCTS } from "../constants";
import { FAQs } from "../components";

const ProductDetailsPage: FC = () => {
  const { id } = useParams();

  const product = useMemo(
    () => PRODUCTS.find((product) => product.id === id),
    [id]
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Page fullWidth title={product.title}>
        <BlockStack gap="1200" align="center">
          <Link to="/products" style={{ display: "block" }}>
            <Button>Back</Button>
          </Link>
          <Text as="p" truncate>
            {product.description}
          </Text>
          <Image
            alt={product.title}
            source={product.image}
            style={{
              maxWidth: "600px",
              maxHeight: "600px",
              marginInline: "auto",
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
        </BlockStack>
        <Box>
        <FAQs
          description={product.description}
          title={product.title}
          variants={product.variants}
        />
        </Box>
      </Page>
    </div>
  );
};

export const ProductDetails = memo(ProductDetailsPage);
