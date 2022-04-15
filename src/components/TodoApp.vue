<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data(){
    return {
      todos: [
        {
          id: 1,
          text: 'qwer',
          complted: false
        }
      ]
    }
  }
}
</script>
