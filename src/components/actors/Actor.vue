<template>
<div class="actor">
    <p>{{name}}</p> <button @click="deleteActor"><img v-bind:src="deleted" /></button>
</div>
</template>

<script>
import deleted from "@/assets/delete.jpg"
export default {
    props: {
        name: String,
    },

    data() {
        return {
            deleted: deleted
        }
    },

    methods: {
        deleteActor() {
            this.$emit('deleteActor', this.name)
        }
    }
    
}
</script>

<style scoped>
button {
    background: transparent;
    border: none;
    margin-left: 10px;
    padding: 0;
    cursor: pointer;
}

img {
    width: 20px;
    height: 20px;
    
}

.actor {
    display: flex;
    align-items: center;
    justify-content: center;
}

p {
    font-size: 16px;
    border-radius: 15px;
    padding: 10px;
    margin: 0;
    background-color: lightgrey;
    display: inline-block;
    
}

</style>
