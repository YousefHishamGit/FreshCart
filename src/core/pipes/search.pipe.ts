import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/Iproduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[],input:string): any {


   if (!items || !input) return items;

  return items.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );

    
  }

}
