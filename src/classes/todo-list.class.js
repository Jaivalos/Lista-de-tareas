
//Creamos la clase para la lista de todos
export class TodoList {

    constructor(){
        //¨Por el momento solo necesitamos un arreglo de todos
        // this.todos = [];
        this.cargarLocalStorage();
    };

    //Creamos los metodos que tendremos en la clase para manejar los todos
    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    };

    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    };

    marcarCompletado( id ){

        //Recorremos el arreglo viendo si la propiedad completado es 1 ó 0
        for( const todo of this.todos ){
            if( todo.id == id ){
                todo.completado = !todo.completado;
                break;
            }
        }
        this.guardarLocalStorage();

    };

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    };

    guardarLocalStorage(){
        localStorage.setItem( "todo", JSON.stringify( this.todos ), this.todos );
    }

    cargarLocalStorage(){
        if( localStorage.getItem("todo") ){
            this.todos = JSON.parse( localStorage.getItem("todo") );
        }else{
            this.todos = [];
        }
        
    }

}
