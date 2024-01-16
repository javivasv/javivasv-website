<template>
  <v-row no-gutters align="center" justify="center">
    <v-btn
      v-for="site in sites"
      :key="site.url"
      class="ma-5"
      color="#1685C5"
      :href="site.url"
      target="_blank"
    >
      <v-avatar class="mr-2" size="25">
        <v-img :src="require(`@/assets/${site.logo}`)"></v-img>
      </v-avatar>
      <span>
        {{ site.name }}
      </span>
    </v-btn>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Sites",
  data() {
    return {
      sites: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/javier-vivas-veliz/",
          logo: "linkedin_logo.jpeg",
        },
        {
          name: "Github",
          url: "https://github.com/javivasv",
          logo: "github_logo.png",
        },
        {
          name: "Buy Me a Coffee",
          url: "https://www.buymeacoffee.com/javivasv",
          logo: "buymeacoffee_logo.png",
        },
        {
          name: "Nuzlocke Database",
          url: "https://nuzlockedatabase.com/home",
          logo: "pokeball.png",
        },
      ],
    };
  },
});
</script>
