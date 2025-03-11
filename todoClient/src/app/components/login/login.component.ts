import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { User } from "../../models/user.model";
import { MatInputModule } from '@angular/material/input';
import { AuthService } from "../../services/auth.service";


@Component({
  selector: "app-login",
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string) {
    const user: User = {
      username: username,
      password: password
    }
    this.authService.login(user).subscribe((res) => {
      if (res.token) {
        this.authService.setToken(res.token);
        console.log("Login successful!");
        this.router.navigate(['/tasks']);
      }
    });
  }
}
