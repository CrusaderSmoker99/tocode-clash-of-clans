<template>
    <div class="card">
        <div v-if="imgUrl" class="card-img__wrapper">
            <img class="card-img" :src="imgUrl" :alt="title"/>
        </div>
               
        <span class="card-name">{{name}}</span>
        <span class="card-title">{{title}}</span>
        <div class="card-body">
           
      
            <slot name="body"></slot>
            
                <router-link v-if="link" class="link" style="display:block; margine-top:16px" :to="link">Еще</router-link>
            
        </div>
        <slot name="footer"></slot>
    </div>

</template>
<script>


export default {
    props: {
        name:{
            type :String,
            requred: true
        },
        title:{
            type :String,
            requred: true
        },
        descr:{
            type :String,
            requred: true
        },
        imgUrl :{
            type :String
        },
        link :{
            type :String
        }



    }
}
</script>
