import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-copy-clipboard',
  templateUrl: 'ngx-copy-clipboard.component.html',
  styleUrls: ['ngx-copy-clipboard.component.css']
})
export class NgxCopyClipboardComponent {

  @Input() text: string = ''
  @Input() styles: string = ''
  @Input() cssClass: string = ''
  
  @Output() copyText: EventEmitter<string> = new EventEmitter()
  async clickCopyText(){
    try {
      await navigator.clipboard.writeText(this.text);
      this.copyText.emit('Texto copiado al portapapeles') 
    } catch (error) {
      this.copyText.emit('Error al copiar el texto:' + error); 
    }
  }

}
