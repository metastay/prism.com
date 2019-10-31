<template>
  <v-app>
    <v-card class="overflow-hidden" flat >
      <v-app-bar
        scroll-target="#playground-example"
        :elevate-on-scroll="true"
        fixed
      >
        <v-app-bar-nav-icon class="ml-3">
          <v-avatar tile><v-img :src="require('./assets/img/pyramid-chart.svg')" /></v-avatar>
        </v-app-bar-nav-icon>

        <v-toolbar-title class="font-weight-light headline  blue--text">PRISM</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text class="primary--text">Home</v-btn>
          <v-btn text class="primary--text">Platform</v-btn>
          <v-btn text class="primary--text">Why</v-btn>
          <v-btn text class="primary--text">Customers</v-btn>
          <v-btn text class="primary--text">About</v-btn>
          <v-btn text class="primary--text">Contact</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-sheet
        id="playground-example"
        class="overflow-y-auto"
      >
        <v-container ma-0 pl-0 fluid style="height: 1500px;">
          <v-content>
            <section >
              <Heading />
            </section>
            <section class="grey lighten-4">
              <Features />
            </section>
            <section >
              <Technology />
            </section>
            <section class="grey lighten-4">
              <PrismApp />
            </section>
            <section >
              <PrismArchitecture />
            </section>
            <section class="grey lighten-4">
              <Testimonials />
            </section>
            <section >
              <RunningInstance />
            </section>
            <section >
              <CaseStudy class="grey lighten-4" />
            </section>
            <section >
              <Offerings/>
            </section>
            <section class="grey lighten-4 " >
              <ContactUs/>
            </section>
            <section  >
              <Footer/>
            </section>
            
            
          </v-content>
        </v-container>
      </v-sheet>
    </v-card>
    
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import Why from "./components/Why.vue";
import Heading from "./components/Heading.vue";
import Features from "./components/Features.vue";
import Technology from "./components/Technology.vue";
import PrismApp from "./components/PrismApp.vue";
import PrismArchitecture from "./components/PrismArchitecture.vue";
import RunningInstance from "./components/RunningInstance.vue";
import Testimonials from "./components/Testimonials.vue";
import CaseStudy from "./components/CaseStudy.vue";
import Offerings from "./components/Offerings.vue";
import ContactUs from "./components/ContactUs.vue";
import Footer from "./components/Footer.vue";

@Component({
  components : {
    Why, Heading, Features, Technology, PrismApp, PrismArchitecture, RunningInstance, Testimonials, CaseStudy, Offerings, Footer, ContactUs
  }
})
export default class App extends Vue {
  
}
</script>
