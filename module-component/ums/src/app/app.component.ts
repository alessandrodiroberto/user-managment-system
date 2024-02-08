import { Component, inject } from '@angular/core';
import { User, UserService } from './users/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userCols = 12;

  title = 'User Managment System';
  selectedUser: User | null = null;
  userService = inject(UserService);
  users = this.userService.getUsers(); //Viene passato nel app.component.html [users]="users"

  onDeletedUser(user: User): void {
    this.userService.deleteUser(user);
    this.refreshTableData();
  }

  onUserUpdated(user: User) {
    this.userService.updateUser(user);
    this.refreshTableData();

    this.selectedUser = null;
    this.showForm(false);
  }

  private refreshTableData() {
    this.users = this.userService.getUsers();
  }

  /*
  showUserForm(user: User): void {
    if (user != this.selectedUser) {
      this.selectedUser = user;
      this.showForm(true);
    } else {
      this.selectedUser = null;
      this.showForm(false);
    }
  }
  */

  showUserForm(user: User): void {
    if (user.id != this.selectedUser?.id) {
      this.selectedUser = { ...user }; //Creo una copia di user e lo passo. Stessa cosa di Object.assign({}, user)
      this.showForm(true);
    } else {
      this.selectedUser = null;
      this.showForm(false);
    }
  }

  private showForm(v: boolean) {
    this.userCols = !v ? 12 : 9;
  }
}
