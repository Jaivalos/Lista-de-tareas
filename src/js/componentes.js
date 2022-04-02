
import { todoList } from "..";
import { Todo } from "../classes/todo.class";

//Referencias HTML
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const eliminarCompletado = document.querySelector(".clear-completed");

//Creamos una funcion para añadir el elemento HTML del TO DO
export const crearTodoHtml = ( todo ) =>{

    //Aca tendremos el to do junto con los datos del objeto, id, completado y tarea
    const htmlTodo = `
    <li class="${ (todo.completado) ? "completed" : "" }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? "checked" : "" }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement("div");
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div;

}

//Eventos
txtInput.addEventListener("keyup", ( event ) =>{

    //Preguntamos si se esta presionando la tecla enter
    if( event.keyCode === 13 && txtInput.value.length > 0){
        // console.log( txtInput.value )
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        //Agregamos el nuevoTodo al HTML
        crearTodoHtml( nuevoTodo );

        txtInput.value = "";
    }

})

divTodoList.addEventListener( "click", ( event ) =>{

    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;

    const todoId = todoElemento.getAttribute("data-id");

    //Hacemos la consulta si se presiona el checkbox
    if( nombreElemento.includes('input') ){
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle("completed");
    }else if( nombreElemento.includes('button') ){
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }

    // console.log(todoList);

})

eliminarCompletado.addEventListener( "click", () =>{

    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length - 1; i >= 0; i-- ){
        const elemento = divTodoList.children[i];
        if( elemento.classList.contains("completed") ){
            divTodoList.removeChild( elemento );
        };
    }

} )
