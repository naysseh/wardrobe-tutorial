<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/squidward.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Natasha's Project
        </h1>

        <p class="subheading font-weight-regular">
          if you'd like to speak to me more follow my
          <a
            href="https://instagram.com/natashaaysseh"
            target="_blank"
          >instagram</a>
          <br> if you dare 😐🤨
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          a small cow 🐄
        </h2>

        <v-row justify="center">

          <a
            href="https://en.wikipedia.org/wiki/Cattle"
            target="_blank"
          >
          <v-img
          :src="require('../assets/cow.png')"
          class="my-3"
          contain
          height="50"
        />
        </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          links that you may want
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'google if you forgot the link',
          href: 'https://google.com',
        },
        {
          text: 'the cornell website',
          href: 'https://cornell.edu',
        },
      ]
    }),
  }
</script>
