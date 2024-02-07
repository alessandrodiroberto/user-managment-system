import { Component, inject } from '@angular/core';
import { User, UserService } from './users/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userCols = 12;
  formCol = 0;

  title = 'User Managment System';
  selectedUser: User | null = null;
  userService = inject(UserService);
  users = this.userService.getUsers(); //Viene passato nel app.component.html [users]="users"

  onDeletedUser(user: User): void {
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }

  showUserForm(user: User): void {
    if (user != this.selectedUser) {
      this.selectedUser = user;
      this.showForm(true);
    } else {
      this.selectedUser = null;
      this.showForm(false);
    }
  }

  private showForm(v: boolean) {
    if (!v) {
      this.userCols = 12;
      this.formCol = 0;
    } else {
      this.userCols = 8;
      this.formCol = 8;
    }
  }
}
