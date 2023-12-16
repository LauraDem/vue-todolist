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
        done: false,
        show: false,
        message: "",
      },
    };
  },

  methods: {
    addTodo() {
      if (this.newTask.text.trim() !== "") {
        const newToDo = { ...this.newTask };
        this.todoList.unshift(newToDo);
        this.newTask.text = ""; // Resetta l'input dopo l'aggiunta
        this.error.show = false; // Nasconde il messaggio di errore
      } else {
        // Mostra un messaggio di errore se il testo è vuoto
        this.error.done = true;
        this.error.show = true;
        this.error.message = "Il campo non può essere vuoto!!";
      }
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
