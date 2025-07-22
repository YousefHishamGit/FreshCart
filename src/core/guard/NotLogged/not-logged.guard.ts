import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const pLATFORM_ID =inject(PLATFORM_ID);

  if (isPlatformBrowser(pLATFORM_ID)) {
    // if I do not have an account
    if (localStorage.getItem('token') === null) {
      return true;
    } else {
      // I have an account
      router.navigate(['/home']);
      return false;
    }
  }


  return true;
};
