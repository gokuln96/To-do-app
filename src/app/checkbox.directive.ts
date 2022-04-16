import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';



@Directive({
  selector: '[appCheckbox]'
})
export class CheckboxDirective {
  isCompleted: boolean = false;
  @Input() set setCompletedStatus(itemCompleted){
      this.update(itemCompleted)
  }
  @HostBinding('class.checked') isChecked
  @HostListener('click') onClick() {
    this.update(null)
  }

  update(isAlreadyCompleted) {
    this.isCompleted = !this.isCompleted

    this.isChecked = isAlreadyCompleted != null ? isAlreadyCompleted : this.isCompleted
    if (this.isChecked)
      this.el.nativeElement.childNodes[0].classList.add('checked')
    else
      this.el.nativeElement.childNodes[0].classList.remove('checked')
  }


  constructor(private el: ElementRef) { 
   
  }


}

