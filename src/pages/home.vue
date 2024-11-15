<template>
  
    <carousel  :itemsToShow="1"  wrapArround="true"  snapAlign="center">
  
  
  <slide class="card-wrapper" v-for="item in items" :key="item.id">
    <Card :title="item.title" 
      :name="item.lvl + ' уровень'" 
      :descr="item.descr" 
      :imgUrl="item.img" 
      :link="'/'+item.alias">
      <template v-slot:body>
        {{ item.descr }}
      </template>
      <template v-slot:footer>
        <div class="card-stats">
          <div v-for="(stat,index) in item.info" :key="index" class="one-third">
            
            <CardFooterVue :title="stat.title" :value="stat.value">
              
            </CardFooterVue>
          </div>
        </div>
      </template>
      
    </Card>
  </slide>
  <template #addons>
    <navigation />
  </template>

</carousel>
 
  
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide,  Navigation } from 'vue3-carousel';
  import items from "@/seeders/items.js";
  import Card from "@/components/UI/Card.vue";
  import CardFooterVue from '@/components/UI/CardFooter.vue';
  export default {
    components: {
      Card,
      Carousel,
      Slide,
      CardFooterVue,
      Navigation
    },
    data() {
      return {
        items:items,
      }
    }
  }
</script>
