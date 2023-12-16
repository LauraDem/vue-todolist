const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "To do list:",

      todoList: [
        { text: "Fare la spesa", done: false },
        {
          text: "Chiamare Mamma",
          done: false,
        },
        {
          text: "Mettere la lavatrice",
          done: false,
        },
        {
          text: "Caffè con Riccardo",
          done: false,
        },
      ],

      newTask: {
        text: "",
        done: false,
      },
      error: {
        done: true,
        show: false,
        message: "",
      },
    };
  },

  methods: {
    addTodo() {
      const newToDo = { ...this.newTask };
      this.todoList.unshift(newToDo);
    },

    deleteTodo(index) {
      // Verifica che l'indice sia valido per evitare errori
      if (index >= 0 && index < this.todoList.length) {
        // Mostra un alert di conferma
        const yesDelete = window.confirm(
          "Sei sicuro di voler eliminare questo elemento?"
        );

        // Se l'utente conferma, elimina l'elemento
        if (yesDelete) {
          this.todoList.splice(index, 1);
        }
      }
    },

    lineThrough(index) {
      this.todoList[index].done = !this.todoList[index].done;
    },
  },
}).mount("#app");
