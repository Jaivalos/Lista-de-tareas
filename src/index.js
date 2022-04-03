
//Importación de estilos
import './styles.css';

//Importacion de clases
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

//Creacion de elemento TodoList para guardar los todos
export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

console.log( todoList.todos )