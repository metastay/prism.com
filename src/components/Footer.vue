<template>
  <v-layout >
    <v-flex>
      <v-card>
        <v-footer absolute color="white" class="font-weight-medium">
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>Metastay</strong>
          </v-col>
        </v-footer>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
