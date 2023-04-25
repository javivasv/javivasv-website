<template>
  <div>
    <v-row class="py-12" no-gutters align="center" justify="center">
      <v-card class="pa-12" width="800">
        <v-col class="pa-0">
          <About />
          <v-divider class="my-3"></v-divider>
          <Sites />
          <v-divider class="my-3"></v-divider>
          <Skills />
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from "@/components/About.vue";
import Sites from "@/components/Sites.vue";
import Skills from "@/components/Skills.vue";
export default defineComponent({
  name: "Home",
  components: {
    About,
    Sites,
    Skills,
  },
});
</script>
