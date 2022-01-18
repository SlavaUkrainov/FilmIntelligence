import gatsby from "@/assets/gatsby.jpg"
import borat from "@/assets/borat.jpg"
import sanya from "@/assets/sanya.jpg"
import sonny from "@/assets/sonny.jpg"
import lala from "@/assets/la-la-land.jpg"
import pilaz from "@/assets/pilaz.jpg"
import john from "@/assets/john.jpg"
import wrath from "@/assets/wrath.jpg"
import sw4 from "@/assets/sw4.jpg"
import brother2 from "@/assets/brother2.jpg"
import hangover from "@/assets/hangover.jpg"
import lebowski from "@/assets/lebowski.jpg"
import yes from "@/assets/yes.jpg"
import sherlock from "@/assets/sherlock.jpg"
import knives from "@/assets/knives.jpg"
import revenant from "@/assets/revenant.jpg"
import pirates3 from "@/assets/pirates3.jpg"
import indiana from "@/assets/indiana.jpg"
import shawshank from "@/assets/shawshank.jpg"
import two from "@/assets/two.jpg"
import chocolate from "@/assets/chocolate.jpg"
import aladdin from "@/assets/aladdin.jpg"
import duskdawn from "@/assets/duskdawn.jpg"
import alien from "@/assets/alien.jpg"
import dmb from "@/assets/dmb.jpg"

const data = [
    {name:"Великий Гэтсби", genre:"drama", relation: "emotions", single: true, year: "10", actors: ["Леонардо Ди Каприо", "Тоби Магуайр"], mark: 7.9, image: gatsby} ,
    {name:"Побег из Шоушенка", genre:"drama", relation: "emotions", single: true, year: "90", actors: ["Тим Роббинс", "Морган Фриман"], mark: 9.1, image: shawshank} ,
    {name:"1+1", genre:"drama", relation: "emotions", single: true, year: "10", actors: ["Франсуа Клюзе"], mark: 8.8, image: two} ,

    {name:"Борат", genre:"comedy", relation: "chill", single: false, year: "00", actors: ["Саша Барон Коэн"], mark: 6.7, image: borat },
    {name:"Мальчишник в Вегасе", genre:"comedy", relation: "chill", single: false, year: "00", actors: ["Бредли Купер", "Эд Хелмс"], mark: 7.9, image: hangover },
    {name:"Большой Лебовски", genre:"comedy", relation: "relax", single: true, year: "90", actors: ["Джефф Бриджес"], mark: 7.8, image: lebowski },
    {name:"Всегда говори ДА", genre:"comedy", relation: "think", single: true, year: "00", actors: ["Джим Керри"], mark: 7.8, image: yes },
    {name:"ДМБ", genre:"comedy", relation: "think", single: true, year: "00", actors: ["Петр Коршунков", "Станислав Дужников", "Алексей Панин"], mark: 7.8, image: dmb },

    {name:"Властелин Колец: Братство кольца", genre:"travel", relation: "think", single: false, year: "00", actors: ["Элайджа Вуд"], mark: 8.6, image: sanya },
    {name:"Выживший", genre:"travel", relation: "emotions", single: true, year: "10", actors: ["Леонардо Ди Каприо"], mark: 7.8, image: revenant },
    {name:"Пираты Карибского моря: На краю света", genre:"travel", relation: "emotions", single: false, year: "00", actors: ["Джонни Депп", "Орландо Блум"], mark: 8.0, image: pirates3 },
    {name:"Индиана Джонс и последний крестовый поход", genre:"travel", relation: "emotions", single: false, year: "80", actors: ["Харрисон Форд"], mark: 8.1, image: indiana },

    {name:"Сонная Лощина", genre:"detective", relation: "emotions", single: true, year: "90", actors: ["Джонни Депп"], mark: 7.9, image: sonny },
    {name:"Шерлок", genre:"detective", relation: "emotions", single: true, year: "10", actors: ["Бенедикт Камбербэтч"], mark: 8.9, image: sherlock },
    {name:"Достать ножи", genre:"detective", relation: "chill", single: false, year: "00", actors: ["Дэниэл Крэйг", "Крис Эванс"], mark: 8.0, image: knives },

    {name:"Ла-Ла Ленд", genre:"musicle", relation: "sad", single: true, year: "10", actors: ["Райан Гослинг", "Эмма Стоун"], mark: 7.9, image: lala },
    {name:"Чарли и шоколадная фабрика", genre:"musicle", relation: "emotions", single: true, year: "00", actors: ["Джонни Депп"], mark: 7.6, image: chocolate },
    {name:"Аладдин", genre:"musicle", relation: "emotions", single: false, year: "10", actors: ["Уилл Смит"], mark: 7.2, image: aladdin },

    {name:"Пила: Игра на выживание", genre:"horror", relation: "emotions", single: false, year: "00", actors: ["Ли Уоннелл"], mark: 7.8, image: pilaz },
    {name:"От заката до рассвета", genre:"horror", relation: "relax", single: false, year: "90", actors: ["Джордж Клуни", "Квентин Тарантино"], mark: 7.8, image: duskdawn },
    {name:"Чужой", genre:"horror", relation: "emotions", single: false, year: "70", actors: ["Сигурни Уивер"], mark: 8.1, image: alien },

    {name:"Джон Уик", genre:"fighter", relation: "relax", single: false, year: "10", actors: ["Киану Ривз"], mark: 7.0, image: john },
    {name:"Звёздные войны: Эпизод 4 — Новая надежда ", genre:"fighter", relation: "emotions", single: false, year: "70", actors: ["Харисон Форд", "Марк Хэммил"], mark: 8.1, image: sw4 },
    {name:"Гнев человеческий", genre:"fighter", relation: "chill", single: false, year: "10", actors: ["Джейсон Стейтем"], mark: 7.6, image: wrath },
    {name:"Брат 2", genre:"fighter", relation: "think", single: true, year: "00", actors: ["Сергей Бодров"], mark: 8.1, image: brother2 }
];


export const getFilms = () => {
	return new Promise(resolve => setTimeout(() => resolve({ data: data }), 200))
}

export const setFilm = ({name, genre, relation, single, year, actors }) => {
    data.push({ name: name, genre: genre, relation: relation, single: single, year: year, actors: actors})
}