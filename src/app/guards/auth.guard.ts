import { CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('username') !== null;
  return isLoggedIn;
};