const todos = {
  data() {
    return {
      todos: [
        { id: 1, createDate: '2023-10-01', item: '寫vue期中作業', dueDate: '2023-11-01', status: '待辦' },
        { id: 2, createDate: '2023-10-02', item: 'vue開會', dueDate: '2023-11-01', status: '待辦' }
      ],
      isModalOpen: false,
      openModalAct: '',
      modalTodo: {},
    }
  },
  methods: {
    openModal(todo) {
      console.log(todo)
      this.isModalOpen = true;
      this.openModalAct = todo ? '編輯' : '新增';
      this.modalTodo = Object.assign({}, todo) || {};
      console.log(this.openModalAct)
    },
    closeModal() {
      this.isModalOpen = false;
    },
    add(todo) {
      console.log(todo)
      const id = this.todos.length + 1;
      const newTodo = { id, createDate: '2023-10-02', item: todo.item, dueDate: todo.dueDate, status: '待辦' }
      this.todos.push(newTodo)
    },
    edit(todo) {
      const index = todo.index;
      delete todo.index;
      this.todos[index] = todo;
    },
    delTodo(todo) {
      this.todos.splice(todo.index, 1)
    },
    submitModal(openModalAct) {
      openModalAct === '新增' ? this.add(this.modalTodo) : this.edit(this.modalTodo);
      console.log(this.todos)
      this.closeModal()
      this.modalTodo = {}
    }
  },
}

Vue.createApp(todos).mount('#app')