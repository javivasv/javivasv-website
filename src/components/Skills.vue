<template>
  <v-row no-gutters align="center" justify="center">
    <v-chip-group>
      <v-chip
        v-for="skill in skills"
        :key="skill.name"
        style="pointer-events: none"
      >
        {{ skill.name }}
      </v-chip>
    </v-chip-group>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Skills",
  data() {
    return {
      skills: [
        {
          name: "JavaScript",
        },
        {
          name: "TypeScript",
        },
        {
          name: "VueJS 2",
        },
        {
          name: "VueJS 3",
        },
        {
          name: "Vuex",
        },
        {
          name: "Vuetify",
        },
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "ReactJS",
        },
        {
          name: "AngularJS",
        },
        {
          name: "MongoDB",
        },
        {
          name: "NodeJS",
        },
        {
          name: "Python",
        },
        {
          name: "Django",
        },
      ],
    };
  },
});
</script>
