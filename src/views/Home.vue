<template>
  <div>
    <v-row class="py-12" no-gutters align="center" justify="center">
      <v-card class="pa-12" width="800">
        <v-col class="pa-0">
          <v-row
            class="py-6"
            no-gutters
            justify="center"
            style="background-size: contain"
            :style="{
              'background-image': `url(${require('@/assets/background_pic.jpg')})`,
            }"
          >
            <v-avatar size="200">
              <v-img :src="require('@/assets/profile_pic.jpeg')"></v-img>
            </v-avatar>
          </v-row>
          <v-row class="py-5" no-gutters align="center" justify="center">
            <h2>Hey, I'm Javier Vivas</h2>
          </v-row>
          <v-row no-gutters align="center" justify="center">
            <v-card-text>
              I'm a Computer/Software Engineer graduated from Universidad Simón
              Bolívar in Caracas, Venezuela. I currently live in Davenport,
              Florida, USA. I'm an American resident and a Venezuelan and
              Italian citizen. I speak both spanish and english.
            </v-card-text>
            <v-card-text>
              As a software developer, I focus primarily in frontend development
              in VueJS, but I also have knowledge of ReactJS and AngularJS.
              Furthermore, I have experience in backend development in MongoDB
              and NodeJS. I currently work as a Frontend Engineer in an online
              3D model interactive viewer.
            </v-card-text>
            <v-card-text>
              I'm a Star Wars fan and enjoy playing videogames (Zelda and
              Pokemon fan), listen to music (mostly rock and metal), working out
              and play basketball. I would like to be a videogame streamer at
              some point.
            </v-card-text>
            <v-card-text>
              <v-row no-gutters align="center" justify="center">
                <v-icon class="mr-2" icon="phone"></v-icon>
                <span>(+1) 8633488877</span>
                <v-divider class="mx-3" vertical></v-divider>
                <v-icon class="mr-2" icon="email"></v-icon>
                <span>javivasv@gmail.com</span>
              </v-row>
            </v-card-text>
          </v-row>
          <v-divider class="my-3"></v-divider>
          <v-row class="py-5" no-gutters align="center" justify="center">
            <v-btn
              v-for="site in sites"
              :key="site.url"
              class="mx-5"
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
          <v-divider class="my-3"></v-divider>
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
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
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
      ],
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
