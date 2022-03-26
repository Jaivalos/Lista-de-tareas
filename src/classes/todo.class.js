
//Creamos la clase para el Todo
export class Todo{

    //La descripcion de la nueva tarea
    constructor( tarea ){
        this.tarea = tarea;
        //Con esto obtenemos una representacion de la fecha y hora actual, dandonos un numero unico.
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

}
