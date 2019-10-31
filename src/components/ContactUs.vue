<template>
  <v-layout align-center py-5 my-5 justify-space-around> 
    
    <v-flex md4 text-center my-5>
      <v-card flat color="transparent" :min-height="200">
        <v-card-title class="headline justify-center">
          <v-avatar tile>
            <v-img
              src="../assets/img/location.png"
              left
            ></v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text>
          <div>#279, 5th Main, HSR layout 6th Sector,</div>
          <div>Bengaluru, Karnataka, 560102</div>
        </v-card-text>
      </v-card>
        
    </v-flex>
    <v-flex md4 text-center my-5 >
      <v-card flat color="transparent" :min-height="200">
        <v-card-title class="headline justify-center">
          <v-avatar tile>
            <v-img
              src="../assets/img/email.png"
              left
            ></v-img>
          </v-avatar>
          <!-- <span class="pl-5">Contact Us</span> -->
        </v-card-title>
        <v-card-text>
          info@metastay.com
        </v-card-text>
      </v-card>
        
    </v-flex>
    <!-- <v-flex md3 >
      <v-card flat color="transparent">
        <v-card-title class="headline">
          <v-avatar tile>
            <v-img
              src="../assets/img/call.png"
              left
            ></v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text>
          
        </v-card-text>
      </v-card>
        
    </v-flex> -->
    
    
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class ContactUs extends Vue {
  
}
</script>
