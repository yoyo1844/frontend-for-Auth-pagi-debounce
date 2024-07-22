<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Hello! ~ {{ userObj.email }}</h1>
    <h2 class="text-2xl font-semibold mb-2">Common Todo List</h2>
    <div class="mt-4 flex">
      <input v-model="newTodoTitle" placeholder="Title" class="border p-2 mr-2" />
      <input v-model="newTodoDescription" placeholder="Description" class="border p-2 mr-2" />
      <button @click="addTodo" class="bg-blue-500 text-white p-2">Add Todo</button>
    </div>
    <div class="todo-list mt-4">
      <ul>
        <li v-for="todo in todos" :key="todo._id" class="mb-2 flex justify-between items-center">
          <div>
            <div v-if="editmode == todo._id" class="flex">
            <input v-model="editedTitle" placeholder="Title" class="border p-2 mr-2" />
            <input v-model="editedDesc" placeholder="Description" class="border p-2 mr-2" />
            </div>
            <span class="font-semibold" v-if="editmode != todo._id">{{ todo.title }}:</span> <span v-if="editmode != todo._id">{{ todo.description }}</span>
          </div>
          <div class="flex">
            <button @click="editTodo(todo)" class="bg-yellow-500 text-white p-2 ml-2" v-if="editmode != todo._id">Edit</button>
            <button @click="saveTodo(todo)" class="bg-yellow-500 text-white p-2 ml-2" v-if="editmode == todo._id">Save</button>
            <button @click="deleteTodo(todo._id)" class="bg-red-500 text-white p-2 ml-2">Delete</button>
          </div>
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userObj: {},
      todos: [],
      newTodoTitle: '',
      newTodoDescription: '',
      editmode : null ,
      editedTitle : '',
      editedDesc : ''
    };
  },
  mounted() {
    const userObj = JSON.parse(localStorage.getItem('userObj'));
    this.userObj = userObj;
    this.fetchTodos();
  },
  methods: {
    async saveTodo(todo){
      try{
          const token = localStorage.getItem('token');
      this.editmode = null
      console.log(todo)
     const res= await axios.post('http://localhost:5000/editTodo',{
        todoID : todo._id,
        editedTitle : this.editedTitle,
        editedDesc : this.editedDesc
      },
      {
          headers: { Authorization: `Bearer ${token}` }
        })
        if(res.data == 'EN'){
          alert('edit not allowed')
          return
        }
        console.log(res.data)
     this.fetchTodos()

      }catch(err){
        console.log(err)
      }
      

    },
    async fetchTodos() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/getTodos', {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.todos = response.data;
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    },
    async addTodo() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/addTodo', {
          title: this.newTodoTitle,
          description: this.newTodoDescription
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });

      console.log(response)
        this.todos.push(response.data.todo);
        this.newTodoTitle = '';
        this.newTodoDescription = '';
      } catch (error) {
        console.error('Failed to add todo:', error);
        alert(error.response.data.message)
      }
    },
    async deleteTodo(todoId) {
      try {
        const token = localStorage.getItem('token');
        const res=await axios.post(`http://localhost:5000/deleteTodo`,{
          todoID : todoId
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if(res.data == 'DN'){
          alert("You do not have permission to Delete")
          return
        }
        alert(res.data)
        this.fetchTodos()
      } catch (error) {
        console.error('Failed to delete todo:', error);
      }
    },
    editTodo(todo) {
      this.editmode = todo._id
      this.editedTitle= todo.title
      this.editedDesc = todo.description
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.todo-list {
  margin-top: 20px;
}

.todo-list ul {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-list button {
  cursor: pointer;
}
</style>
