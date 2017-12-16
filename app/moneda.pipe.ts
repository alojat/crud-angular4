import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any, args?: number): any {
    var flotante = parseFloat(value);
    return "S/. " + flotante.toFixed(args);
  }

}
