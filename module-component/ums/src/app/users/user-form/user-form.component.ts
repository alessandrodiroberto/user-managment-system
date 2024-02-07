import { Component, Input } from '@angular/core';
import { User } from '../user.services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Input() user: User | null = null;
}
