import { createRoot } from "react-dom/client";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import "@shopify/polaris/build/esm/styles.css";

createRoot(document.getElementById("root")!).render(
  <AppProvider i18n={enTranslations}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
