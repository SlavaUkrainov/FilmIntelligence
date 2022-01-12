<template>

<div class="card">
<img v-bind:src="obj.image" />
<div class="card_field">
<label><input type="radio" :checked="option == obj.value" v-bind:value="option" @change="$emit('changeValue', obj.value)" /> {{obj.name}}</label>
</div>

</div>

</template>

<script>
export default {
    props: {
        obj: Object,
        option: null | String
    },
    setup() {
        
    },
}
</script>

<style scoped>

.card {
    
}

.card img {
    width: 100%;
    height: 250px;
}

.card_field {
    width: 100%;
    padding: 10px 10px 10px 30px;
    text-align: left;
    background-color: #ccc;
    min-height: 60px;
    display: flex;
    align-items: center;
}

.card_field label {
    display: inline-block;
    width: 100%;
}

.card_field input {
    margin-right: 5px;
}

.card_field span {
    font-size: 22px;
    font-family: Arial;
}

</style>