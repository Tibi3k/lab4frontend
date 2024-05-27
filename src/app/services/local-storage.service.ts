import { Injectable } from '@angular/core';
import { GoogleUserData } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Save token to local storage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Retrieve token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove token from local storage
  removeToken() {
    localStorage.removeItem('token');
  }


  saveUser(user: GoogleUserData) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
  }

  // Retrieve token from local storage
  getUser(): GoogleUserData | null {
    const json = localStorage.getItem('user');
    if (json) {
      // Parse the JSON string back to an object
      return JSON.parse(json) as GoogleUserData;
    } else {
    return null
    }
  }

  // Remove token from local storage
  removeUser() {
    localStorage.removeItem('user');
  }
}