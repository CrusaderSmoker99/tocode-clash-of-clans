<template >
   
    <div class="card-stats">
        <div v-for="(stat,index) in info" :key="index" class="one-third">
            <span class="stat-title">{{ stat.title }}</span>
            <br/>
            <span class="stat-value">{{ stat.value}}</span>
        </div>
      </div>
  </template>
  <script>
    export default {
      props: { 
          info:{
              type :Array,
              requred: true
          }
        }
    }
</script>