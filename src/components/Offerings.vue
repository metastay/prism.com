<template>
  <v-layout align-center py-5 my-5 justify-space-around>
    <v-spacer></v-spacer>
    <v-flex md4 >
      <v-card raised>
        <v-card-title class="headline">
          <v-avatar tile>
            <v-img
              src="../assets/img/offerings/product.png"
              left
            ></v-img>
          </v-avatar>
          <span class="pl-5">Product Offering</span>
        </v-card-title>
        <v-card-text>
          <v-list>
            <template v-for="(offering, index) in productOfferings" >
              <v-list-item :key="'product'+index">
                <v-list-item-icon v-if="offering.icon">
                  <v-icon color="indigo">{{offering.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="grey--text text--darken-2">{{offering.title}}</v-list-item-title>
                  <v-list-item-subtitle v-if="offering.description">{{offering.description}}</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list >
        </v-card-text>
      </v-card>
        
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex md4 >
      <v-card raised>
        <v-card-title class="headline">
          <v-avatar tile>
            <v-img
              src="../assets/img/offerings/service.png"
              left
            ></v-img>
          </v-avatar>
          <span class="pl-5">Service Offering</span>
        </v-card-title>
        <v-card-text>
          <v-list>
            <template v-for="(offering, index) in serviceOfferings" >
              <v-list-item :key="'service'+index">
                <v-list-item-icon v-if="offering.icon">
                  <v-icon color="indigo">{{offering.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="grey--text text--darken-2">{{offering.title}}</v-list-item-title>
                  <v-list-item-subtitle v-if="offering.description">{{offering.description}}</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list >
        </v-card-text>
      </v-card>
        
    </v-flex>
    <v-spacer></v-spacer>
    
    
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Offerings extends Vue {
  private productOfferings = [
    {
      icon: '',
      title : 'Full stack',
      description: ''
    },
    {
      icon: '',
      title : 'Yearly License',
      description: ''
    },
    {
      icon: '',
      title : 'Unlimited development installation',
      description: ''
    },
    {
      icon: '',
      title : 'One production installation',
      description: ''
    },
    {
      icon: '',
      title : 'Quarterly upgrade',
      description: ''
    },
    {
      icon: '',
      title : 'Patch release for stability',
      description: ''
    },
    {
      icon: '',
      title : 'SLA based support',
      description: ''
    }
  ];

  private serviceOfferings = [
          {
            icon: '',
            title : 'Modeling and Implementation of processes',
            description: ''
      },
      {
            icon: '',
            title : 'Test and Deployment',
            description: ''
      },
      {
            icon: '',
            title : 'Production Monitoring',
            description: ''
      },
      {
            icon: '',
            title : 'Process changes and Implementation',
            description: ''
      },
      {
            icon: '',
            title : 'Provide data in format required by downstream systems',
            description: ''
      },
      {
            icon: '',
            title : 'Build custom integration API ',
            description: ''
      },
      {
            icon: '',
            title : 'Guide the technical team to integrate with Prism',
            description: ''
      }

  ]
}
</script>
