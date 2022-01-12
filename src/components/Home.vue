<template>
 <div class="container">
   
     <Preview v-if="$store.state.sysState==0" />
     <!-- <input type="radio" v-model="film.genre" value="Драма"> -->
      <Question v-if="$store.state.sysState==1" :options="genres" :type="'genre'" :film="film" :title="'Выберите предпочитаемый жанр'" @changeValue="changeValue"/>
      <Question v-if="$store.state.sysState==2" :options="relations" :type="'relation'" :film="film" :title="'Что вы хотите получить от фильма?'" @changeValue="changeValue" />
      <Question v-if="$store.state.sysState==3" :options="years" :type="'year'" :film="film" :title="'Выберите десятилетие выпуска фильма'" @changeValue="changeValue" />
      <Question v-if="$store.state.sysState==4" :options="single" :type="'single'" :film="film" :title="'Как вы хотите посмотреть фильм?'" @changeValue="changeValue" />
      <Actors :actors="film.actors" v-if="$store.state.sysState==5" @addNew="addActor" @deleteActor="deleteActor" />
      <Result :film="film" :final="true" v-if="$store.state.sysState==6" />
      <Result :film="film" :final="false" v-if="$store.state.sysState!=6 && $store.state.sysState!=0 && $store.state.sysState!=1" />
      
 </div>
</template>

<script>
import Preview from "@/components/states/Preview.vue"
import gatsby from "@/assets/gatsby.jpg"
import borat from "@/assets/borat.jpg"
import knives from "@/assets/knives.jpg"
import lalaland from "@/assets/la-la-land.jpg"
import lord from "@/assets/lordrings.jpg"
import pila from "@/assets/pila.jpg"
import pirates from "@/assets/pirates.jpg"
import Card from "@/components/card/Card"
import chill from "@/assets/chill.jpg"
import relax from "@/assets/relax.jpg"
import sad from "@/assets/sad.jpg"
import think from "@/assets/think.jpg"
import emotions from "@/assets/emotions.png"
import sixteens from "@/assets/60.jpg"
import seventeens from "@/assets/70.jpg"
import eighteens from "@/assets/80.jpg"
import ninetens from "@/assets/90.jpg"
import zeroes from "@/assets/00.jpg"
import tens from "@/assets/10.jpg"
import single from "@/assets/single.jpg"
import company from "@/assets/companyjpg.jpg"
import Actors from "@/components/actors/Actors.vue"
import Question from "@/components/states/Question.vue"
import Result from "@/components/states/Result.vue"

export default {
  components: {Preview, Card, Actors, Question, Result},
  data() {
    return {
      film: {
        genre: null,
        relation: null,
        single: null,
        year: null,
        actors: []
      },

      genres: [
        {id:0, name: "Драма", image:gatsby, value: "drama"},
        {id:1,name: "Комедия", image:borat, value: "comedy"},
        {id:2,name: "Детектив", image:knives, value: "detective"},
        {id:3,name: "Мюзикл", image:lalaland, value: "musicle"},
        {id:4,name: "Приключения", image:lord, value: "travel"},
        {id:5,name: "Хоррор", image:pila, value: "horror"},
        {id:6,name: "Боевик", image:pirates, value: "fighter"},
      ],

      relations: [
        {id:0, name: "Расслабиться", image: chill, value: "chill" },
        {id:1, name: "Отдохнуть после тяжелого дня", image: relax, value: "relax" },
        {id:2, name: "Получить гору эмоций", image: emotions, value: "emotions" },
        {id:3, name: "Подумать над фильмом", image: think, value: "think" },
        {id:4, name: "Погрустить", image: sad, value: "sad" },
      ],

      years: [
        {id:0, name: "Шестидесятые", image: sixteens, value: "60"},
        {id:1, name: "Семидесятые", image: seventeens, value: "70"},
        {id:2, name: "Восьмидесятые", image: eighteens, value: "80"},
        {id:3, name: "Девяностые", image: ninetens, value: "90"},
        {id:4, name: "Нулевые", image: zeroes, value: "00"},
        {id:5, name: "Десятые", image: tens, value: "10"},
      ],

      single: [
        {id:0, name: "В компании", image: company, value: false },
        {id:1, name: "В одиночестве", image: single, value: true}
      ]
    }
  },

  methods: {
    changeValue(value, type) {
      this.film[type] = value;
    },

    addActor(value) {
      this.film.actors.push(value)
    },

    deleteActor(value) {
      this.film.actors = this.film.actors.filter(el => el != value);
    }

  },
}
</script>

<style scoped>
.container {
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
