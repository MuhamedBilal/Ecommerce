import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value === 0) {
      return '<span style="color: red">Out of stock</span>';
    } else {
      return '<span style="color: green">In stock</span>';
    }
  }
}
