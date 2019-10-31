<template>
  <v-container py-5>
    <v-layout align-center my-3 wrap justify-center>
      <v-flex class="text-center" >
        <span class="display-1 font-weight-light grey--text ">Technology Stack</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around py-3 >
      <v-flex md3>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/addon.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Modeler
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Language: YAWL
            Eclipse Plugin
            XText
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md3>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/scala.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Lightbend Reactive Platform
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Task Engine : Java, Scala, Akka
                Server: Play on JVM
                Integration: Rest API, Akka Actor
                Storage : Event Sourced, Mongo, MySql, PostgreSQL
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md3 >
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/app.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Custom Application
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Rest API, Java, PHP, Javascript, Go etc...
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class TechnologySummary extends Vue {
  
}
</script>
