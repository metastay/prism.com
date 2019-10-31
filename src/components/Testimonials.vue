<template>
  <v-layout align-center py-5  justify-space-around wrap>
    <v-flex class="text-center" md12  py-5>
      <span class="display-1 font-weight-light grey--text ">Testimonials</span>
    </v-flex>
    <v-flex md8 >
      <v-card
        class="mx-auto"
      >
        <v-card-title>
          <v-avatar tile>
            <v-img
              src="../assets/img/testimonials/probe.png"
              left
            ></v-img>
          </v-avatar>
          <span class="title font-weight-light pl-3">Probe Information Systems, Private Limited.</span>
        </v-card-title>

        <v-card-text class="headline font-weight-light">
          <blockquote class="blockquote">"Prism has made our workflows extremely easy to implement and modify (as we keep optimising them). In fact, having your team doing the implementation and deployment management, has given our continuous improvements a real boost.</blockquote>
          <blockquote class="blockquote">The workflow designers love it for the simplicity of integration. The operation supervisors love it for the insights they get about the workforce.
          With Focus on the anvil, I think we have it all now.."</blockquote>
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="../assets/img/testimonials/avatar.svg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Gautam Dan - CTO</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
  

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Testimonials extends Vue {
  
}
</script>
