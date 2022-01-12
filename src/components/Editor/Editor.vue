<template>
<div class="container" v-if="$store.state.superuser.active">
    <h2>Здесь показываются активные поля для вашей системы. <br> В случае неактивности поля система не будет спрашивать пользователя по данной теме</h2>
    <p>Жанр менять нельзя</p>
    <Edit :option="'relation'" :name="'Эмоции от фильма'"/>
    <Edit :option="'year'" :name="'Эпоха фильма'"/>
    <Edit :option="'single'" :name="'Желание посмотреть в одиночестве'"/>
    <Edit :option="'actors'" :name="'Актеры'"/>
</div>
<h2 class="reject" v-else>
    Вы не вошли как эсперт. Авторизируйтесь или покиньте страницу!
</h2>

<my-button @click="$router.push({ name: 'Home' });">Назад</my-button>

</template>

<script>
import Edit from "@/components/Editor/Edit.vue"

export default {
    components: {Edit},
}


</script>

<style>
.reject {
    color: red;
}

.container {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container > * {
    margin-bottom: 10px;
}
</style>