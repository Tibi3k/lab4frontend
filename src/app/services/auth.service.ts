import { Injectable } from '@angular/core';
import { GoogleUserData } from '../model/User';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageServcie: LocalStorageService){}
  private accessToken: string | null = null;
  private user: GoogleUserData | null = null;
  setAccessToken(token: string) {
    this.localStorageServcie.saveToken(token)      
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    if(this.accessToken == null)
      this.accessToken = this.localStorageServcie.getToken()
    return this.accessToken;
  }

  setUser(user: GoogleUserData) {
    this.localStorageServcie.saveUser(user)      
    this.user = user;
  }

  getUser(): GoogleUserData | null {
    if(this.user == null)
      this.user = this.localStorageServcie.getUser()
    return this.user;
  }
}