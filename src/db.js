import gatsby from "@/assets/gatsby.jpg"
import borat from "@/assets/borat.jpg"
import sanya from "@/assets/sanya.jpg"
import sonny from "@/assets/sonny.jpg"
import lala from "@/assets/la-la-land.jpg"
import pilaz from "@/assets/pilaz.jpg"
import john from "@/assets/john.jpg"

const data = [
    {name:"Великий Гэтсби", genre:"drama", relation: "emotions", single: true, year: "10", actors: ["Леонардо Ди Каприо", "Тоби Магуайр"], mark: 7.9, image: gatsby} ,
    {name:"Борат", genre:"comedy", relation: "chill", single: false, year: "00", actors: ["Саша Барон Коэн",], mark: 6.7, image: borat },
    {name:"Властелин Колец: Братство кольца", genre:"travel", relation: "think", single: false, year: "00", actors: ["Элайджа Вуд"], mark: 8.6, image: sanya },
    {name:"Сонная Лощина", genre:"detective", relation: "emotions", single: true, year: "90", actors: ["Джонни Депп",], mark: 7.9, image: sonny },
    {name:"Ла-Ла Ленд", genre:"musicle", relation: "sad", single: true, year: "10", actors: ["Райан Гослинг", "Эмма Стоун"], mark: 7.9, image: lala },
    {name:"Пила: Игра на выживание", genre:"horror", relation: "emotions", single: false, year: "00", actors: ["Ли Уоннелл",], mark: 7.8, image: pilaz },
    {name:"Джон Уик", genre:"fighter", relation: "relax", single: false, year: "10", actors: ["Киану Ривз",], mark: 7.0, image: john },
];


export const getFilms = () => {
	return new Promise(resolve => setTimeout(() => resolve({ data: data }), 200))
}

export const setFilm = ({name, genre, relation, single, year, actors }) => {
    data.push({ name: name, genre: genre, relation: relation, single: single, year: year, actors: actors})
}