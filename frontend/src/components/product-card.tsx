import { Link } from "react-router";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Divider,
  InlineStack,
  BlockStack,
} from "@shopify/polaris";
import { memo } from "react";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  variants: string[];
}

const ProductCardComponent = ({
  id,
  title,
  description,
  image,
  price,
  variants,
}: Props) => {
  return (
    <Card>
      <BlockStack gap="200">
        <Text as="h2" truncate>
          {title}
        </Text>
        <Divider borderColor="border-brand" />
        <Text as="p" truncate>
          {description}
        </Text>
        <Image
          alt={title}
          source={image}
          width={160}
          height={160}
          style={{
            display: "block",
            margin: "0 auto",
            borderRadius: 8,
          }}
        />
        <Text as="h5">
          Price: <Text as="strong">{price}$</Text>
        </Text>
        <InlineStack direction="row" gap="200">
          {variants.map((variant) => (
            <Badge key={variant} tone="info">
              {variant}
            </Badge>
          ))}
        </InlineStack>
        <Divider borderColor="border-brand" />
        <Link to={`/product/${id}`}>
          <Button>See Details</Button>
        </Link>
      </BlockStack>
    </Card>
  );
};

export const ProductCard = memo(ProductCardComponent);
