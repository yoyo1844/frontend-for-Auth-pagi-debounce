<template>
<input type="number" v-model.number.lazy="input">
<p>data :{{input}}</p>
</template>
<script>
export default{
    name:"ModifiersTut",
    data(){
        return{
            input : ''
        }
    }
}
</script>
