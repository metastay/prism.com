<template>
  <v-layout>
    <v-flex>
      <v-card class="overflow-hidden overflow-y-auto" flat >
      
        <v-app-bar
          scroll-target="#playground-example"
          :elevate-on-scroll="true"
          fixed
        >
          <v-app-bar-nav-icon class="ml-3">
            <v-avatar tile><v-img :src="require('../assets/logo.svg')" /></v-avatar>
          </v-app-bar-nav-icon>

          <v-toolbar-title class="font-weight-light headline prism--text" >PRISM</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text href="#heading" class="primary--text">Home</v-btn>
            <v-btn text href="#features" class="primary--text">Features</v-btn>
            <v-btn text href="#platform" class="primary--text">Platform</v-btn>
            <v-btn text @click="$vuetify.goTo('#platform', options)" class="primary--text">Platform</v-btn>
            <v-btn text href="#customers" class="primary--text">Customers</v-btn>
            <v-btn text href="#offerings" class="primary--text">Offerings</v-btn>
            <v-btn text href="#contactus" class="primary--text">Contact</v-btn>
          </v-toolbar-items>
        </v-app-bar>
        <v-sheet
          id="playground-example"
          class="overflow-y-auto"
        >
          <v-container ma-0 pl-0 fluid style="height: 1500px;">
            <v-content>
              <section id="heading">
                <Heading />
              </section>
              <section class="grey lighten-4" id="features">
                <Features />
              </section>
              <section >
                <PrismArchitecture />
              </section>
              <section class="grey lighten-4" id="platform" >
                <PrismApp />
              </section>
              <section id="technology">
                <Technology />
              </section>
              <section class="grey lighten-4" id="customers" >
                <Testimonials />
              </section>
              <section >
                <RunningInstance />
              </section>
              <section >
                <CaseStudy class="grey lighten-4" />
              </section>
              <section id="offerings">
                <Offerings/>
              </section>
              <section class="grey lighten-4 " id="contactus">
                <ContactUs/>
              </section>
              <section  >
                <Footer/>
              </section>
              
              
            </v-content>
          </v-container>
        </v-sheet>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import Why from "@/components/Why.vue";
import Heading from "@/components/Heading.vue";
import Features from "@/components/Features.vue";
import Technology from "@/components/Technology.vue";
import PrismApp from "@/components/PrismApp.vue";
import PrismArchitecture from "@/components/PrismArchitecture.vue";
import RunningInstance from "@/components/RunningInstance.vue";
import Testimonials from "@/components/Testimonials.vue";
import CaseStudy from "@/components/CaseStudy.vue";
import Offerings from "@/components/Offerings.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components : {
    Why, Heading, Features, Technology, PrismApp, PrismArchitecture, RunningInstance, Testimonials, CaseStudy, Offerings, Footer, ContactUs
  }
})
export default class Home extends Vue {
  private options = {
    duration: 800,
    offset: 20,
    easing: 'linear'
  };
}
</script>
<style scoped>
.prism--text {
  color: #2d88d4;
}
</style>
