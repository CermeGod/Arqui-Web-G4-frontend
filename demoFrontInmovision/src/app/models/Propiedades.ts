import { Distrito } from "./Distrito"
import { Usuario } from "./Usuario"

export class Propiedades{
    propiedadId:number=0
    titulo:string=" "
    descripcion:string=" "
    precio:number=0
    direccion:string=" "
    fecha:Date=new Date()
    estado:boolean=false
    area:number=0
    habitacion:number=0
    banios:number=0
    urlVR:number=0
    distrito:Distrito=new Distrito
    usuario:Usuario=new Usuario


}