import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/API/g, '***');;
  }

}
