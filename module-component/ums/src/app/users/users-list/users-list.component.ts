import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { User, UserService } from '../user.services';
import { Router } from '@angular/router';

@Component({
  //providers: [UserService], //se abilitato, verrà creata una istanza per ogni component app-users-list in app.component.html
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  @Output() userDeleted = new EventEmitter<User>();

  router = inject(Router);
  userService = inject(UserService);

  //@Output() userToBeUpdated = new EventEmitter<User>(); //con router non più necessario
  /*@Input()*/ users: User[] = [];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  deleteUser(user: User): void {
    /*this.userService.deleteUser(user);
    this.users = this.getUsers();
    */
    this.userDeleted.emit(user);
  }

  updateUser(user: User): void {
    //this.userToBeUpdated.emit(user);

    //Modo 1 : DA CODICE  TS, altriemnti da html con routerLink
    //this.router.navigate(['users', user.id]);
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
