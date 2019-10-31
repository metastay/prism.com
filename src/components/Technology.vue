<template>
  <v-container py-5>
    <v-layout align-center my-3 wrap justify-center>
      <v-flex class="text-center" >
        <span class="display-1 font-weight-light grey--text ">Technology Stack</span>
      </v-flex>
    </v-layout>
    <section>
      <Modeler/>
      <v-divider></v-divider>
    </section>
    <section>
      <LightbendPlatform/>
      <v-divider></v-divider>
    </section>
    <section>
      <CustomApp/>
      <!-- <v-divider></v-divider> -->
    </section>
    
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import Modeler from "@/components/Modeler.vue";
import LightbendPlatform from "@/components/LightbendPlatform.vue";
import CustomApp from "@/components/CustomApp.vue";

@Component({
  components : {
    LightbendPlatform, Modeler, CustomApp
  }
})
export default class Technology extends Vue {
  
}
</script>
