import { Component, Input } from '@angular/core';
import { User } from '../user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input() user: User; //in questo modo è visibile in users-list.component.html

  /* @Input({
    required: true,
    alias: 'cnt',
    transform: (v: number) => v + 1,
  })
  couter = 0;

  constructor() {
    this.user = {
      id: 0,
      name: '',
      lastName: '',
      email: '',
      fiscalCode: '',
      phoneNumber: '',
      province: '',
    };
  }
  */
}
