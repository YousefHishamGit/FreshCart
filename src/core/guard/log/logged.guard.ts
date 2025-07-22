import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const pLATFORM_ID =inject(PLATFORM_ID);
  if(isPlatformBrowser(pLATFORM_ID)){
    //if i have account

      if(localStorage.getItem('token') !==null)
      {
        return true;
      }
      else
      {
        //no account
        router.navigate(['/sign-in']);
        return false;
      }

  }
  //server
  else{
  return false;
  }
};
