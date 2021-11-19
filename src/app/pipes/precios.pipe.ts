import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precios'
})
export class PreciosPipe implements PipeTransform {
  valorDolar=23;

  transform(precioSugerido: number, ...args: unknown[]): number {
    const salida =
     ((precioSugerido * this.valorDolar) -
              (precioSugerido * this.valorDolar) *.15);
    console.log(salida);

    return salida;
  }

}
