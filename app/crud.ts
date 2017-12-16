
export interface Crud {

  listar();
  detallar(id : number);
  guardar();
  modificar(item : Object);
  eliminar(id : number)

}
