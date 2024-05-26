import { Injectable } from '@angular/core';

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
}