import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
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

  constructor(private authService: AuthService) {}

  login(username: string, password: string) {
    console.log("Logging in...", username, password);
    this.authService.login(username, password).subscribe((res) => {
      if (res.token) {
        this.authService.setToken(res.token);
        console.log("Login successful!");
      }
    });
  }
}
