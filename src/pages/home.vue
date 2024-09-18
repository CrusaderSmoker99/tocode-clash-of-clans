<template>
  <div class="md-body">
  </div>
  <div class="card-wrapper" v-for="item in items" :key="item.id">
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
            <span class="stat">{{stat.title}}</span>
            <br/>
            <span class="stat-value">{{stat.value}}</span>
          </div>
        </div>
      </template>
      
    </Card>
  </div>
  
</template>

<script>
  import items from "@/seeders/items.js"
  import Card from "@/components/UI/Card.vue"
  export default {
    components: {Card},
    data() {
      return {
        items:items,
      }

    }
  }
</script>
