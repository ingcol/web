<template>
  <div class="home">
    <Slider/>
    <Information/>
    <Contact/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Slider from '@/components/template/Slider.vue'
import Information from '@/components/template/Information.vue'
import Contact from '@/components/template/Contact.vue'

@Component({
  components: {
   Slider,
   Information,Contact
  },
})
export default class Home extends Vue {}
</script>

