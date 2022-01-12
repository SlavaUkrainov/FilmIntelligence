<template>
    <div>
        <my-button :class="{reject : $store.state.settings[this.option]}" @click="changeState">{{$store.state.settings[this.option]? "Деактивировать" : "Активировать"}}</my-button>
    <span>{{name}}</span>
    </div>
    
</template>

<script>
export default {
    props: {
        option: String,
        name: String
    },

    methods: {
        changeState() {
            this.$store.commit('setSettings', {type: this.option, value: !this.$store.state.settings[this.option]})
        }
    },
}
</script>

<style scoped>

span {
    margin-left: 10px;
    font-size: 18px;
}

.reject {
    color: red;
    background-color: lightcoral;
}

.reject:hover {
    background-color: lightcoral;
}


</style>