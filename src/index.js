
//Importación de estilos
import './styles.css';

//Importacion de clases
import { Todo, TodoList } from './classes';

//Creacion de elemento TodoList para guardar los todos
const todoList = new TodoList();

//Creamos elementos Todo
const tarea1 = new Todo( 'Estudiar Css' );
const tarea2 = new Todo( 'Estudiar JS' );
const tarea3 = new Todo( 'Estudiar HTML' );

//Guardamos y mostramos
todoList.nuevoTodo(tarea1);
todoList.nuevoTodo(tarea2);
todoList.nuevoTodo(tarea3);

console.log(todoList);
