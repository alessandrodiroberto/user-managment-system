import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { User, UserService } from '../user.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userService = inject(UserService);

  //@Input() user: User | null = null;
  @Input() user: Partial<User> = {}; //Con Partial, do la possibilità che all'oggetto di non essere nullo, ma solo alcuni dei capi lo possono essere
  @Output() updatedUser = new EventEmitter<User>();

  onSubmitForm(form: NgForm) {
    const userUpdate: User = { ...form.value, id: this.user.id ?? 0 };

    //this.userService.updateUser(userUpdate);
    this.updatedUser.emit(userUpdate);

    form.reset();
  }
}
