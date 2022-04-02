
//Importación de estilos
import './styles.css';

//Importacion de clases
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

//Creacion de elemento TodoList para guardar los todos
export const todoList = new TodoList();

//Creamos elementos Todo
const tarea1 = new Todo( 'Estudiar Css' );

// console.log( todoList );
// crearTodoHtml( tarea1 );
