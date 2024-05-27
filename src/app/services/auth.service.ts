import { Injectable } from '@angular/core';
import { GoogleUserData } from '../model/User';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageServcie: LocalStorageService){}
  private accessToken: string | null = null;
  private sub: string | null = null;
  private user: GoogleUserData | null = null;
  setAccessToken(token: string) {
    this.localStorageServcie.saveToken(token)      
    this.accessToken = token;
  }
  setSub(sub: string) {
    this.localStorageServcie.saveSub(sub)      
    this.sub = sub;
  }
  getSub(): string | null {
    if(this.sub == null)
      this.sub = this.localStorageServcie.getSub()
    return this.sub;
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