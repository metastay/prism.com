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
                <v-img src="../assets/img/running/flow.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                35 Flows & 200+ Tasks
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            <div>Forms the backbone to their core business</div>
            <div>Fast parallel processing using dynamic task creation</div>
          </v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex md4>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/running/performance.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Performance & Visibility
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            <div>TAT - Decreased from 2-3 days to 2 hours</div>
            <div>Performant, easy to scale - actor based implementation</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/running/maintenance.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Migration & Maintenance
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            <div>Migrated 8 legacy applications.</div>
            <div>Quicker response to change</div>
            <div>Requires minimal support</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class RunningInstance extends Vue {
  
}
</script>
