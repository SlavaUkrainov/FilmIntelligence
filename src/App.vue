<template>
  <!-- <div id="nav">
    <router-link to="/">Экспертная система</router-link> |
    <router-link to="/about">Войти как эксперт</router-link>
  </div> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
}

body, html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body * {
  box-sizing: border-box;
}

#nav {
  padding: 30px;
  position: fixed;
  top: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
