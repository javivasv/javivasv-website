<template>
  <v-row no-gutters>
    <v-col>
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
          Bolívar in Caracas, Venezuela. I currently live in Davenport, Florida,
          USA. I'm an American resident and a Venezuelan and Italian citizen. I
          speak both spanish and english.
        </v-card-text>
        <v-card-text>
          As a software developer, I focus primarily in frontend development
          using ReactJS and VueJS. Furthermore, I have experience in backend
          development using NodeJS and in database management using MongoDB.
        </v-card-text>
        <v-card-text>
          I'm a Star Wars fan and enjoy playing videogames (Zelda and Pokemon
          fan), listen to music (mostly rock and metal), working out and play
          basketball. I would like to be a videogame streamer at some point.
        </v-card-text>
        <v-card-text>
          <v-row no-gutters align="center" justify="space-around">
            <div class="ma-3">
              <v-icon class="mr-2" icon="phone"></v-icon>
              <span>(+1) 863-348-8877</span>
            </div>
            <div class="ma-3">
              <v-icon class="mr-2" icon="email"></v-icon>
              <span>javivasv@gmail.com</span>
            </div>
          </v-row>
        </v-card-text>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
});
</script>
