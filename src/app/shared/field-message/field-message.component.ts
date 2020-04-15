import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-message',
  templateUrl: './field-message.component.html',
  styleUrls: ['./field-message.component.scss']
})
export class FieldMessageComponent implements OnInit {

  @Input() text: string = '';
  @Input() severity: string = '';

  constructor() { }

  ngOnInit() {
  }

}
