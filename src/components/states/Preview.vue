<template>
 <div class="preview">
   <h1>Экспертная система по подбору фильма</h1>
   <h2>Инструкция</h2>
   <p>Данная экспертная система поможет подобрать для вас фильм под любой случай. Ключевым фактором при выборе картины, кроме ваших предпочтений, станет оценка на портале Кинопоиск.</p>
   <p>Если вы хотите добавить свой фильм в базу данных, то вам необходимо авторизироваться как эксперт.</p>
   
   <div class="buttons">
   <my-button @click="$store.commit('setState', 1)">Продолжить</my-button>
   <my-button @click="$router.push({ name: 'Login' });">Авторизироваться как эксперт</my-button>
   <my-button @click="$router.push({ name: 'Settings' })">Изменить настройки (нужна авторизация)</my-button>
   </div>
   
   
 </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@media(max-width: 768px) {
  .buttons {flex-direction: column; justify-content: center;}
  .buttons > * {margin-top: 10px;}
}
</style>
