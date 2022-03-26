
//Creamos la clase para la lista de todos
export class TodoList {

    constructor(){
        //¨Por el momento solo necesitamos un arreglo de todos
        this.todos = [];
    };

    //Creamos los metodos que tendremos en la clase para manejar los todos
    nuevoTodo( todo ){
        this.todos.push( todo );
    };

    eliminarTodo( id ){

    };

    marcarCompletado( id ){

    };

    eliminarCompletados(){

    }

}
