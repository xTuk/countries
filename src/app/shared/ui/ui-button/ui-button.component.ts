import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {

   @Input() icon: string = ''
   @Input() iconSize: string = ''
   @Input() iconColor: string = ''
   @Input() borderColor: string = 'border-transparent'
   @Input() margin: string = ''

   @Input() text: string = ''
   @Input() disabled: boolean =  false
   @Input() active: boolean =  false
   @Output() onClick = new EventEmitter()

  emitClick() {
    this.onClick.emit()
  }

}
