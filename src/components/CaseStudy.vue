<template>
  <v-layout align-center py-5 justify-space-around wrap>
    <v-flex class="text-center" md12  py-5>
      <span class="display-1 font-weight-light grey--text ">Case Study</span>
    </v-flex>
    <v-flex md8>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline  mb-4 ${year.color}--text`">{{year.title}}</h2>
            <div :class="year.color+'--text font-weight-light'" v-html="year.description">
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class CaseStudy extends Vue {
  private years = [
        {
          color: 'primary',
          year: 'May 2017',
          title: 'State of Affairs',
          description: '<ul> <li>Use home grown application.</li> <li>Each report takes 2-3 days</li><li>Thruput around 4000 a month </li><li>Not able to scale, difficult to change </li><li>Difficult to add more data points</li><li>Lack of supervision</li></ul>',
        },
        {
          color: 'blue',
          year: 'Aug 2017',
          title: 'Prism deployed in production',
          description: '<ul> <li>2 Flows</li><li>14 Tasks</li></ul>',
        },
        {
          color: 'primary',
          year: 'Aug 2018',
          title: 'After 1 year',
          description: '<ul> <li>29 Flows got added</li><li>169 Tasks got added</li><li>Replacing 8 Legacy Applications</li></ul>',
        },
        {
          color: 'blue',
          year: 'Aug 2019',
          title: 'After 2 years +',
          description: '<ul> <li>33 Flows</li><li>195 Tasks</li><li>Processes got stable after iterative changes.</li><li>Process optimized</li><li>TAT increased significantly</li></ul>',
        },
      ];
}
</script>
