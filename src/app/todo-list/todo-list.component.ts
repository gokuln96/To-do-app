import { Component, Input, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckboxDirective } from '../checkbox.directive';
import { Task } from '../Model/task';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {
  @Input() displayMode
  @ViewChildren(CheckboxDirective) checkbox;
  allItemsList: Array<any> = [];
  id: number = 0;
  itemsLeft: number = 0;
  displayState: string = 'all';
  alreadyCompleted:boolean= false;


  constructor(  ) { }

  onEnter(event: any, input: NgForm): void {
    if (event.which === 13) {

      if (input.value.value.trim().length === 0)
        return

      let obj: Task = {
        id: this.id,
        completed: this.alreadyCompleted,
        value: input.value.value,
        isHovering: false
      }
      this.allItemsList.push(obj)

      this.id++;
      if(!this.alreadyCompleted)
        this.itemsLeft++;
      input.reset()
    }

  }

  onDelete(itemToBeDeleted: Task): void {
    let index = this.allItemsList.findIndex(item => { return item.id === itemToBeDeleted.id })
    if (!itemToBeDeleted.completed)
      this.itemsLeft--;
    this.allItemsList.splice(index, 1)

  }

  toggleCompleted(selectedItem: Task): void {
    let index = this.allItemsList.findIndex(item => {
      return item === selectedItem
    })
    this.allItemsList[index].completed = !this.allItemsList[index].completed;
    if (selectedItem.completed) this.itemsLeft--
    else this.itemsLeft++

  }

  onTaskbarAction(e: any): void {
    if (e.target.id == 'clear') {
      this.clearCompleted()
      return
    }

    this.displayState = e.target.id;
  }

  onMouseHover(hoveredItem: Task): void {
    let index = this.allItemsList.findIndex(item => {
      return item.id === hoveredItem.id
    })
    if (index === -1)
      return
    this.allItemsList[index].isHovering = true
  }

  onMouseLeave(hoveredItem: Task): void {
    let index = this.allItemsList.findIndex(item => {
      return item.id === hoveredItem.id
    })
    if (index === -1)
      return
    this.allItemsList[index].isHovering = false
  }

  clearCompleted() {
    let index
    while (1) {

      index = this.allItemsList.findIndex(item => {
        return item.completed === true
      })
      if (index > -1)
        this.onDelete(this.allItemsList[index])
      else
        break;
    }

   


  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allItemsList, event.previousIndex, event.currentIndex);
  }
  



 

}
