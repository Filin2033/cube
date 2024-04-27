<template>
<div id="bind-attribute">
  <div class="menu">
    <router-view/>
  </div>
  <div>
    <span v-bind:title="message">
      Наведи на меня курсор на пару секунд, чтобы
      увидеть динамически связанное значение title!
    </span>
  </div>
  <div>
    <router-link to="/">Hello</router-link>
    <router-link to="/todo">ToDo</router-link>
  </div>
  <hr>
</div>
</template>

<script>
import TodoList from './components/TodoList.vue';
export default {
  data() {
    return {
      message: 'Страница загружена ' + new Date().toLocaleString()
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>