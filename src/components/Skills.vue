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
          name: "TypeScript",
        },
        {
          name: "JavaScript",
        },
        {
          name: "ReactJS",
        },
        {
          name: "Redux",
        },
        {
          name: "MUI",
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
          name: "AngularJS",
        },
        {
          name: "NodeJS",
        },
        {
          name: "MongoDB",
        },
        {
          name: "Python",
        },
        {
          name: "Django",
        },
        {
          name: "Java",
        },
      ],
    };
  },
});
</script>
