import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
