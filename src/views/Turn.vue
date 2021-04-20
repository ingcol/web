<template>
  <div class="home">
    <TurnIndex/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TurnIndex from '@/components/turn/Index.vue'

@Component({
  components: {
   TurnIndex
  },
})
export default class  Turn extends Vue {}
</script>