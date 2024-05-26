export class GoogleUserData {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;

  constructor(data: any) {
    this.iss = data.iss;
    this.azp = data.azp;
    this.aud = data.aud;
    this.sub = data.sub;
    this.email = data.email;
    this.email_verified = data.email_verified;
    this.nbf = data.nbf;
    this.name = data.name;
    this.picture = data.picture;
    this.given_name = data.given_name;
    this.family_name = data.family_name;
    this.iat = data.iat;
    this.exp = data.exp;
    this.jti = data.jti;
  }
}