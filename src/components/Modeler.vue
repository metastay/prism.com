<template>
  <v-layout align-center py-5 justify-space-around>
    
    <v-flex md8 >
      
      <v-layout row align-center my-3>
        <v-flex shrink pa-4>
          <v-avatar tile>
            <v-img src="../assets/img/technology/modeler.png" ></v-img>
          </v-avatar>
        </v-flex>
        <v-flex >
          <span class="headline">Modeler</span>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex >
          <div class="title font-weight-light">Language YAWL</div>
          <!-- <div class="subtitle-1 grey--text"></div> -->
        </v-flex>
        <v-flex><v-divider vertical></v-divider></v-flex>
        <v-flex >
          <div class="title font-weight-light">Eclipse Plugin</div>
          <!-- <div class="subtitle-1 grey--text">Play on JVM</div> -->
        </v-flex>
        <v-flex><v-divider vertical></v-divider></v-flex>
        <v-flex >
          <div class="title font-weight-light">XText</div>
          <!-- <div class="subtitle-1 grey--text">Rest API, Akka Actor</div> -->
        </v-flex>
        <!-- <v-flex><v-divider vertical></v-divider></v-flex>
        <v-flex >
          <div class="title font-weight-light">Storage</div>
          <div class="subtitle-1 grey--text">Event Sourced, Mongo, MySql, PostgreSQL</div>
        </v-flex> -->
      </v-layout>
    </v-flex>
    
    <v-flex md3 >
      <v-card tile raised>
        <v-img src="../assets/img/technology/modeler-side.png"></v-img>
      </v-card>
    </v-flex>
    
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Modeler extends Vue {
  
}
</script>
