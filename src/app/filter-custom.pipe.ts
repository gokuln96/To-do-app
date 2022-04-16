import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCustom',
  pure: false
})
export class FilterCustomPipe implements PipeTransform {

  transform(itemList: Array<any>, displayState: string): Array<any> {

    if (displayState === 'active')
      return itemList.filter(item => item.completed == false);
    else if (displayState === 'completed')
      return itemList.filter(item => item.completed == true);
    else
      return itemList

  }

}
