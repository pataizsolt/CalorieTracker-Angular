import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let tzoffset = (new Date(value)).getTimezoneOffset() * 60000;
    let minOffSet = new Date(value).getTime() - tzoffset
    let localISOTime = (new Date(minOffSet)).toISOString().replace(/T/, " ").replace(/:00.000Z/, "").replace(/00:00/, "").trim();
    return localISOTime;
  }

}
