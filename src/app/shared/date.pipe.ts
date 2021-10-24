import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let dt = value as Date;
    return dt.getFullYear() + '-' + (dt.getMonth()) + 1 + '-' + dt.getDate();
  }

}
