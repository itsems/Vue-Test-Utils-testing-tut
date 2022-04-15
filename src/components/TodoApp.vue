<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data(){
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'qwer',
          complted: false
        }
      ]
    }
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: new Date().getTime(),
        text: this.newTodo,
        complted: false
      })
      this.newTodo = ''
    }
  }
}
</script>
