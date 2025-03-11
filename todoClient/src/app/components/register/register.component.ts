import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model'
import { MatInputModule } from '@angular/material/input';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  register(username: string, password: string) {
    const user: User = {
      username: username,
      password: password
    }
    this.authService.register(user).subscribe((res) => {
      console.log("Registration successful!", res);
      this.router.navigate(['/login']);
    });
  }
}
