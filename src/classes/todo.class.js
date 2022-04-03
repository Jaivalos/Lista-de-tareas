
//Creamos la clase para el Todo
export class Todo{

    static fromJSON( {id, tarea, completado, creado} ){
        const tempTodo = new Todo( tarea );
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo. creado    = creado;
        
        return tempTodo;
    }

    //La descripcion de la nueva tarea
    constructor( tarea ){
        this.tarea = tarea;
        //Con esto obtenemos una representacion de la fecha y hora actual, dandonos un numero unico.
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

}
