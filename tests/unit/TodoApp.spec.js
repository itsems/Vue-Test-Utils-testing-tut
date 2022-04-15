import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe('TodoApp', () =>{
  it('render text', () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get('[data-test="todo"]')
    console.log(todo);

    expect(todo.text()).toBe('qwer')
  })
  it('add new todo', async () => {
    const wrapper = mount(TodoApp);
    const todoList = '[data-test="todo"]';
    const newTodoInput = '[data-test="new-todo"]';
    const todoForm = '[data-test="form"]'
    
    expect(wrapper.findAll(todoList)).toHaveLength(1)
    
    //! 在 vue 改變 data 的行為是非同步行為(changing state is async in vue)
    await wrapper.get(newTodoInput).setValue('asdf') // 非同步行為
    await wrapper.get(todoForm).trigger('submit') // 非同步行為
    
    expect(wrapper.findAll(todoList)).toHaveLength(2);
    expect(wrapper.get(newTodoInput).element.value).toEqual("");
  })

})