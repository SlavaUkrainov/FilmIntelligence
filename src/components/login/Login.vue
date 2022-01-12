<template>
    <div class="register_form">
        <h2>Войдите как эксперт, чтобы иметь возможность менять настройки</h2>
        <input type="text" v-model="data.name" placeholder="Введите имя" />
        <input type="password" v-model="data.password" placeholder="Введите пароль" />
        <div>
            <my-button @click="setData">Войти</my-button>
            <my-button @click="$router.push({ name: 'Home' });" style="background-color:red; margin-left: 10px;">Вернуться назад</my-button>
        </div>
        <p v-if="$store.state.superuser.active">Авторизирован</p>
        <p v-else class="unknown">Не авторизрован</p>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    data() {
        return {
            data: {
                name: "",
                password: ""
            }
        }
    },

    methods: {
        setData() {
           this.$store.commit('setActive', this.data);
            if(this.$store.state.superuser.active) {
                this.data = {
                name: "", 
                password: ""
            };
            }
            
        }
    }
}
</script>

<style scoped>
.register_form {
    display: flex;
    flex-direction: column;
    align-items: center;
}


p {
    font-size: 16px;
    color: green;
    width: 300px;
    text-align: center;
    padding: 10px;
    background-color: lightgreen;
}

.unknown {
    color: red;
    background-color: lightcoral;
}

input {
    width: 500px;
    padding: 10px 35px 10px 20px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 15px;
}
</style>