import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { User, UserService } from '../user.services';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  userService = inject(UserService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  user: User | null = null;
  @Output() updatedUser = new EventEmitter<User>();

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const id = Number(p.get('id'));
      this.user = this.userService.getUser(id);
    });
  }

  onSubmitForm(form: NgForm) {
    const userUpdate: User = { ...form.value, id: this.user?.id ?? 0 };

    //this.userService.updateUser(userUpdate);
    this.userService.userUpdated.next(userUpdate);
    this.router.navigateByUrl('users');

    form.reset();
  }
}
