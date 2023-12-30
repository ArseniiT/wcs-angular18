import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { RoleName } from '../models/role.enum';

export const IsConnected: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.getRole() === RoleName.ADMIN || userService.getRole() === RoleName.USER) {
    return true;
  } else {
    return router.createUrlTree(['/denied'])
  }
};
