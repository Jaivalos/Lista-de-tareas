
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

        this.todos = this.todos.filter( todo => todo.id != id );

    };

    marcarCompletado( id ){

        //Recorremos el arreglo viendo si la propiedad completado es 1 ó 0
        for( const todo of this.todos ){
            if( todo.id == id ){
                todo.completado = !todo.completado;
                break;
            }
        }

    };

    eliminarCompletados(){

    }

}
