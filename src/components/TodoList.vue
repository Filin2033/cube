<template>
  <div>
    <h2>Список дел:</h2>
    <hr>
    <form @submit.prevent="addTask(newTask)">
      <input type="text" v-model="newTask" placeholder="Введите задачу...">
      <button type="submit">Добавить</button>
    </form>
    <hr>
    <ul>
      <li 
      v-for="(task, index) in tasks"
      :key="index"
      :class="{completed: task.completed, notcompleted: !task.completed}">
      <input type="checkbox" :checked="task.completed" @change="toggleTask(index)">
      {{ task.text }}
      <my-button 
        @click="removeTask">
        Удалить
      </my-button>
      </li>
    </ul>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';

export default {
  components: {
    MyButton
  },
  data () {
    return {
      tasks: [
        {text: 'Купить хлеб', completed: false},
        {text: 'Купить молоко', completed: false},
        {text: 'Купить масло', completed: false}
      ],
      newTaskText: ''
    }
  },
  methods: {
   removeTask(index) {
      this.tasks.splice(index, 1);
    },
  
    addTask(newTaskText) {
    if (newTaskText.trim() !== '') { 
      this.tasks.push({ text: newTaskText, completed: false });
      this.newTask = '';
    }
  },
    toggleTask(index) {
      const task = this.tasks[index];
      task.completed = !task.completed;
    }
  }
}
 
  

</script>

<style>
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-around;
  gap: 30px calc(10rem - 10px);
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.completed {
  text-decoration: line-through;
  color: #999;
}
.notcompleted {
  color: #fa5959;
}
</style>