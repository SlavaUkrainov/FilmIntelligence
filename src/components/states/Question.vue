<template>
    <div>
      <h2>{{title}}</h2>
      <div class="card_grid" :class="{'upgrade': options.length < 4}">
        <div v-for="elem in options" :key="elem.id">
        <Card :obj="options[elem.id]" :option="film[type]" @changeValue="changeValue" />
      </div>
      </div>
      <my-button @click="setNewState">Дальше</my-button>
      </div>
</template>

<script>
import Card from "@/components/card/Card.vue"
export default {
    components: {Card},
    props: {
        workState: Number,
        options: Array,
        type: String,
        film: Object,
        title: String,
    },
    
    setup() {
        
    },

    methods: {
        changeValue(value) {
            this.$emit("changeValue", value, this.type)
        },

        setNewState() {
            if(this.film[this.type] != null) {
                this.$store.commit('setState', this.$store.state.sysState+1)
            }

        }
    },

    mounted() {
      if(!this.$store.state.settings[this.type]) {
        this.$store.commit('setState', this.$store.state.sysState+1)
      }

      
    }
}
</script>

<style scoped>
.card_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
  grid-gap: 10px;
  max-width: 900px;
  margin: 0 auto 20px;
}

.upgrade {
  grid-template-columns: repeat(auto-fit, minmax(205px, 305px)) !important;
  justify-content: center;  
}

@media(max-width: 768px) {
.card_grid {
  grid-template-columns: repeat(2, 1fr);
}
}
</style>