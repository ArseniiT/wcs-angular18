import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoleName } from './models/role.enum';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  roleName =  RoleName

  constructor(public userService: UserService){}

  changeRole(role: string) {
    this.userService.setRole(<RoleName>role);
  }
}
