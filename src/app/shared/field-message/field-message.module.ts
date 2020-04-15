import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldMessageComponent } from './field-message.component';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [FieldMessageComponent],
  imports: [
    CommonModule,
    MessagesModule,
    MessageModule
  ],
  exports: [FieldMessageComponent]
})
export class FieldMessageModule { }
