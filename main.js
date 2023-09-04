const { createApp } = Vue;

  createApp({

    data() {
      return {
        title: 'To do list:',

        todoList:[
          { text:'Fare la spesa',
            done: true,
          },
          {
            text:'Chiamare Mamma',
            done: false,
          },
          {
            text:'Mettere la lavatrice',
            done: false,
          },
          {
            text:'Caffè con Riccardo',  
            done: false,
          },                        
        ],

        newTask: {
          text: '',
          done: false,
        },
        error: {
          done: true,
          show: false,
          message: '',
        },
      };
    },


    methods: {

      addTodo() {

        const newToDo = { ...this.newTask };
        this.todoList.push(newToDo);     
      },


      deleteTodo(index) {
        this.todoList.splice(index,1);
      },
    },


  }).mount('#app');