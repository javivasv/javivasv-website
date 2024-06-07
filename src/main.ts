import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { aliases, md } from "vuetify/iconsets/md";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Style
import "@/style/style.less";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
