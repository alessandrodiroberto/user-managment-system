import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserService } from '../user.services';

@Component({
  //providers: [UserService], //se abilitato, verrà creata una istanza per ogni component app-users-list in app.component.html
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent /* implements OnInit */ {
  @Output() userDeleted = new EventEmitter<User>();
  @Output() userToBeUpdated = new EventEmitter<User>();
  @Input() users: User[] = [];

  deleteUser(user: User): void {
    /*this.userService.deleteUser(user);
    this.users = this.getUsers();
    */
    this.userDeleted.emit(user);
  }

  updateUser(user: User): void {
    this.userToBeUpdated.emit(user);
  }

  /*
  constructor(private userService: UserService) {
    //    this.users = this.getUsers();
  }
*/
  /*
  ngOnInit(): void {
    //this.users = this.userService.getUsers();
  }
*/
  /*
  getUsers(): User[] {
    return this.userService.getUsers();
  }
  */
  /*
  trackUser(index: number, user: User): string {
    return user.email;  //VALORE UNIVOCO
  }
  */
}
