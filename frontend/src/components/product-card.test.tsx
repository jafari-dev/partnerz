import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { ProductCard } from "./product-card";
import { MemoryRouter } from "react-router";

describe("ProductCard component", () => {
  test("should render product card elements correctly", () => {
    const { getByRole } = render(
      <AppProvider i18n={enTranslations}>
        <MemoryRouter>
          <ProductCard
            id="1"
            title="Product 1"
            description="Description 1"
            image="https://via.placeholder.com/150"
            price={10}
            variants={["Variant 1", "Variant 2"]}
          />
        </MemoryRouter>
      </AppProvider>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/product/1");
    expect(getByRole("button")).toHaveTextContent("See Details");
  });
});
