export interface ModeloCalzado{
  id?:number;
  modelo: string;
  descripcion: string;
  imageFull: string;
  imageThumbnail: string;
  precioCompra: string;
  precioSugerido: number;
  tallas?: string;
  nombre?:string;
}
