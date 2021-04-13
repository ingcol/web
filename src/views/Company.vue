<template>
  <div class="home">
    <CompanyIndex/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CompanyIndex from '@/components/companies/Index.vue'

@Component({
  components: {
   CompanyIndex
  },
})
export default class Company extends Vue {}
</script>