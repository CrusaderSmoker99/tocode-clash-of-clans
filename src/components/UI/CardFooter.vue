<template >
    <div  class="one-third">
      
        <span class="stat">{{ title }}</span>
        <br/>
        <span class="stat-value">{{ value}}</span>
      
    </div>
  </template>
  <script>
    export default {
      props: {
          value:{
              type :String,
              requred: true
          },
          title:{
              type :String,
              requred: true
          }
        }
    }
</script>