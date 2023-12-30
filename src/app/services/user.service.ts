import { Injectable } from '@angular/core';
import { RoleName } from '../models/role.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role = RoleName.ANONYMOUS

  getRole(): RoleName {
    return this.role;
  }

  setRole(role: RoleName): void {
    this.role = role;
  }
}
