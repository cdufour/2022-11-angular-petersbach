import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, max: number): string {
    //return value.substring(0,10) + '...'
    return value.substring(0, max);
  }

}
