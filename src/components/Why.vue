<template>
  <v-layout>
    <v-flex>
      <v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Why extends Vue {
  private items = [
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
    }
  ];
}
</script>
