<template>
  <v-container py-5>
    <!-- <v-layout align-center my-3 wrap justify-center>
      <v-flex class="text-center" >
        <span class="display-1 font-weight-light grey--text ">Running</span>
      </v-flex>
    </v-layout> -->
    <v-layout wrap py-3 >
      <v-flex md4>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/monitor.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Monitor
              </v-card-title>
            </v-flex>
          </v-layout>
          
          <v-card-text  class="text-center">
            <v-card raised>
              <v-img src="../assets/img/monitor-dashboard.png"></v-img>
            </v-card>
          </v-card-text>
          <v-card-text  class="text-center">
            <div>App for monitoring the real time flow and task instance and take actions. </div>
          </v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex md4>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/focus-analytics.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Focus
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            <v-card raised>
              <v-img src="../assets/img/focus.png"></v-img>
            </v-card>
          </v-card-text>
          <v-card-text  class="text-center">
            <div>App which gives analytics of TAT amd Thruput over a period of time and helps to optimize processes.</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/task.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Bench
              </v-card-title>
            </v-flex>
          </v-layout>
          
          <v-card-text  class="text-center">
            <v-card raised>
              <v-img src="../assets/img/bench.png"></v-img>
            </v-card>
          </v-card-text>
          <v-card-text  class="text-center">
            <div>An Executive app which can be used to do simple tasks.</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class PrismApp extends Vue {
  
}
</script>
