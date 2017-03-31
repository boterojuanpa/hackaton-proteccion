import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderPipe implements PipeTransform {

  transform(value) {
    return value.slice().reverse();
  }
}
