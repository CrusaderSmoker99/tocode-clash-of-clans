<template>
    <div class="wrapper-person">
        <div v-if="item">
            <h1 class="title">{{item.title}}</h1>
            <img :src="item.img" :alt="item.descr">
            <p>{{item.descr}}</p>
            <div class="card-stats">
                <div v-for="(stat,index) in item.info" :key="index" class="one-third">
                  <span class="stat">{{stat.title}}</span>
                  <br/>
                  <span class="stat-value">{{stat.value}}</span>
                </div>
              </div>
            <br/>
                <div>
                    <router-link to="/" class="btn btnPrimary">Домой</router-link>
                </div>
        </div>
    </div>
</template>
<script>
import items from "@/seeders/items.js"
export default {
    data () {return
        item : null
    } ,
    created() {
        const alias=this.$route.params.itemAlias
        const item=items.find(el=>el.alias===alias)
        this.item=item
    } 
}
</script>