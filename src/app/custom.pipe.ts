import {PipeTransform, Pipe} from '@angular/core';

@Pipe({

    name:'append'
})


export class AppendPipe implements PipeTransform{
    transform(value: string) {
    
   return value + 'gopi';
   
    }
    
}