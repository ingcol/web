<template>
  <div class="home">
    <DepartmentIndex/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DepartmentIndex from '@/components/department/Index.vue'

@Component({
  components: {
   DepartmentIndex
  },
})
export default class  Department extends Vue {}
</script>