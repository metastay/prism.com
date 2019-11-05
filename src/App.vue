<template>
  <v-app>
   <router-view></router-view>
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
