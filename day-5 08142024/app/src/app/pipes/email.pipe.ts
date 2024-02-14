import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {



  transform(value: string, ...args: unknown[]): unknown {
    
    return value[0]+'***************@'+value.split('@')[1];



  }

}
