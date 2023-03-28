import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Icons from "unplugin-icons/vite";
import Resolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  components: {
    dirs: [
      "~/components/atoms",
      "~/components/molecules",
      "~/components/organisms",
    ],
  },
  imports: {
    dirs: ["composables/*/index.ts", "stores"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
    "vite-plugin-vue-type-imports/nuxt",
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.API_BASE_URL || "https://gateway.marvel.com/v1/public",
      apiPublicKey:
        process.env.API_PUBLIC_KEY || "004423c7c59e69f3f3fbde8abbbc78be",
    },
  },
  vite: {
    plugins: [
      Icons({
        customCollections: {
          "app-icons": FileSystemIconLoader("./assets/icons"),
        },
        iconCustomizer(collection, _icon, props) {
          if (collection === "app-icons") {
            props.width = "100%";
            props.height = "100%";
          }
        },
      }),
      Components({
        resolvers: [
          Resolver({
            prefix: false,
            customCollections: ["app-icons"],
          }),
        ],
      }),
    ],
  },
});
