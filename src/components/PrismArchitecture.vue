<template>
  <v-layout align-center py-5 justify-space-around>
    
    <v-flex md3 >
      
      <v-layout row align-center my-3>
        <v-flex shrink pa-4>
          <v-avatar tile>
            <v-img src="../assets/logo.svg" ></v-img>
          </v-avatar>
        </v-flex>
        <v-flex >
          <span class="headline">Platform Architecture</span>
        </v-flex>
      </v-layout>
      
    </v-flex>
    
    <v-flex md6 >
      <v-card tile raised>
        <v-img src="../assets/img/prism_architecture.png"></v-img>
      </v-card>
    </v-flex>
    
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class PrismArchitecture extends Vue {
  
}
</script>
