import { Propiedades } from "./Propiedades"
import { Usuario } from "./Usuario"


export class Contacto{
    contactoId:number=0
    nombre:string=" "
    correo:string=" "
    telefono:string=" "
    mensaje:string=" "
    fecha:Date=new Date()
    propiedad:Propiedades=new Propiedades
    usuario:Usuario=new Usuario

}