// import { CanActivateFn } from '@angular/router';
// import { Injectable } from '@angular/core';


// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('username') !== null;
  return isLoggedIn;
};

