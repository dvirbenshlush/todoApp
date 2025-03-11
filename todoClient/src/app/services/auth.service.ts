import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { environment } from '../../../src/environments/environments'
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = `${environment.server_url}/api/auth`;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { user });
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, {user});
  }

  logout() {
    localStorage.removeItem("token");
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    const token = localStorage.getItem("token");
    return token;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
