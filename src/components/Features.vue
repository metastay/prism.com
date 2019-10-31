<template>
  <v-container py-5>
    <v-layout align-center my-3 wrap justify-center>
      <v-flex class="text-center" >
        <span class="display-1 font-weight-light grey--text ">Features</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around py-3 >
      <v-flex md3>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/features/simple.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Simple
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Simpler to create sound model - less surface area
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md3>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/features/change.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Change
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Easy to change the process - based on static types
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md3 >
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/features/performant.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Performant
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Performant, easy to scale - actor based implementation
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around py-3 >
      <v-flex md3>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/features/flexible.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Flexible
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Flexible  resource management strategies
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md3>
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/features/analytics.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Analytics
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Complete auditability and data analytics - event sourced
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md3 >
        <v-card color="transparent" flat >
          <v-layout column align-center>
            <v-flex mt-4>
              <v-avatar tile>
                <v-img src="../assets/img/features/cost.png" ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-title>
                Cost
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text  class="text-center">
            Lower cost of ownership
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Features extends Vue {
  
}
</script>
