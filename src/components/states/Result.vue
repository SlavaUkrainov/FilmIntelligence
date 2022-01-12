<template>
<div class="result">
    <h1>Результат</h1>
    <div v-if="current != null" class="film">
        <h2 class="film_previes">Вам больше всего подходит</h2>
        <img v-bind:src="current[0].image" />
        <p class="film_name">{{current[0].name}}</p>
        <div class="argumnets" v-if="final">
            <p><strong>Почему именно этот фильм?</strong></p>
            <p v-for="(arg, index) in arguments" :key="index" class="argument">
                {{arg}}
            </p>
            <my-button @click="$store.commit('setState', 0)">Вернуться на главную</my-button>
        </div>
    </div>
</div>
</template>

<script>
import {getFilms} from "@/db"

export default {
    props: {
        film: Object,
        final: Boolean,
    },

    setup() {
        
    },

    data() {
        return {
            arguments: [],
            current: null
        }
    },

    mounted() {
        console.log(this.film)
    },

    methods: {
        getFilm(film, res) {
            this.current = res.filter((el) => (film.genre==null || el.genre == film.genre) && (this.film.actors.length == 0 || this.checkActors(el.actors, this.film.actors)) && (film.years==null || el.years == film.years) && (film.relation== null || el.relation == film.relation) && (film.single==null || el.single == film.single) );
            if (this.current.length == 0) this.current = res.filter(el => el.genre == film.genre);
            this.current = this.current.sort((prev, next) => next.mark - prev.mark);
            this.final && this.getArguments(this.current[0]);
        },

        checkActors(filmActors, choosenActors) {
            let counter = 0;
            let response = true;
            console.log(choosenActors[0]);
            console.log(choosenActors.length);
            console.log(filmActors.length);
            while(counter < choosenActors.length) {
                for(let j=0; j<filmActors.length; j++) {
                    console.log(filmActors[j])
                    console.log(choosenActors[counter])
                    if(choosenActors[counter] == filmActors[j]) {
                        this.arguments.push(`В этом фильме снимается ${choosenActors[counter]}`); 
                        counter++;
                        break;
                    }
                    if (j == filmActors.length - 1) {
                        response = false;
                        counter++;
                    }
                }
            }
            return response;
        },

        getArguments(current) {
            if (current.year == this.film.year) this.arguments.unshift("Фильм подходит вам по эпохе");
            if (current.single == this.film.single) this.arguments.unshift("Вы посмотрите фильм в нужной атмосфере");
            if (current.relation == this.film.relation) this.arguments.unshift("Вы получите от фильма то, что хотите");
            if (current.genre == this.film.genre) this.arguments.unshift("Фильмы совпадают по жанру");
        },

        async setFilms() {
            let res = await getFilms();
            this.getFilm(this.film, res.data);
        }
    },

    mounted() {
        console.log(this.film)
        this.setFilms();
    }
    
}
</script>

<style scoped>
.result {
    margin-bottom: 10px;
}


img {
    max-width: 305px;
    max-height: 250px;
}

.film {
    box-shadow: 5px 5px 5px lightgrey;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;
    width: fit-content;
}

.film_name {
    font-size: 18px;
    font-style: italic;
}

.argument {
    margin:0;
    padding: 5px 0;
}
</style>