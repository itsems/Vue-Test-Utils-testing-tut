import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe('TodoApp', () =>{
  it('render text', () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get('[data-test="todo"]')
    console.log(todo);

    expect(todo.text()).toBe('qwer')
  })
})