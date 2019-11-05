<template>
  <v-layout align-center py-5 justify-space-around>
    
    <v-flex md8 >
      
      <v-layout row align-center my-3>
        <v-flex shrink pa-4>
          <v-avatar tile>
            <v-img src="../assets/img/technology/custom-app.png" ></v-img>
          </v-avatar>
        </v-flex>
        <v-flex >
          <span class="headline">Custom Applications Integration</span>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex >
          <div class="title font-weight-light">Rest API</div>
          <!-- <div class="subtitle-1 grey--text"></div> -->
        </v-flex>
        <v-flex><v-divider vertical></v-divider></v-flex>
        <v-flex >
          <div class="title font-weight-light">Java</div>
          <!-- <div class="subtitle-1 grey--text">Play on JVM</div> -->
        </v-flex>
        <v-flex><v-divider vertical></v-divider></v-flex>
        <v-flex >
          <div class="title font-weight-light">PHP</div>
          <!-- <div class="subtitle-1 grey--text">Rest API, Akka Actor</div> -->
        </v-flex>
        <v-flex><v-divider vertical></v-divider></v-flex>
        <v-flex >
          <div class="title font-weight-light">Javascript</div>
          <!-- <div class="subtitle-1 grey--text">Event Sourced, Mongo, MySql, PostgreSQL</div> -->
        </v-flex>
        <v-flex><v-divider vertical></v-divider></v-flex>
        <v-flex >
          <div class="title font-weight-light">Go</div>
          <!-- <div class="subtitle-1 grey--text">Event Sourced, Mongo, MySql, PostgreSQL</div> -->
        </v-flex>
      </v-layout>
    </v-flex>
    
    <v-flex md3 >
      <v-card tile flat>
        <v-img src="../assets/img/technology/custom-app-side.png"></v-img>
      </v-card>
    </v-flex>
    
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class CustomApp extends Vue {
  
}
</script>
