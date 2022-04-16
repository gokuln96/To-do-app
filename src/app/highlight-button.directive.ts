import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightButton]'
})
export class HighlightButtonDirective {

  @HostListener('click', ['$event.target']) handleClick(btn){
    this.element.nativeElement.childNodes[0].classList = ['']
    this.element.nativeElement.childNodes[1].classList = ['']
    this.element.nativeElement.childNodes[2].classList = ['']
      if(btn.id === 'all'){
        this.element.nativeElement.childNodes[0].classList.add('highlight')
      }else if(btn.id === 'active'){
        this.element.nativeElement.childNodes[1].classList.add('highlight')
      }else if(btn.id === 'completed'){
        this.element.nativeElement.childNodes[2].classList.add('highlight')
      }
  }
  constructor(private element:ElementRef) { 
  }

}
