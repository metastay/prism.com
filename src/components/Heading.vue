<template>
  <v-layout align-center py-5>
    <v-flex md5 offset-md1>
      <v-card
        flat
        color="white"
      >
        <div class="display-2 blue--text text--lighten-2 pb-2">FAST</div>
        <div class="display-3 blue--text text--darken-2  pb-2">FLEXIBLE</div>
        <div class="display-1 blue--text text--darken-5  pb-2">SECURE</div>
        <div class="display-1 orange--text text--lighten-2  pb-2">Task Execution Platform</div>
        <div class="subtitle-1 blue--text text--darken-5  pb-2">based on</div>
        <div class="display-1 blue--text text--darken-3  pb-2">YAWL</div>
      </v-card>
    </v-flex>
    <v-flex md6>
      <v-img src="../assets/img/heading/process.jpg"></v-img>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Heading extends Vue {
  private items = [
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
    }
  ];
}
</script>
