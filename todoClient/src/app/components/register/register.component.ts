import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
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

  constructor(private authService: AuthService) {}

  register(username: string, password: string) {
    this.authService.register(username, password).subscribe((res) => {
      console.log("Registration successful!", res);
    });
  }
}
