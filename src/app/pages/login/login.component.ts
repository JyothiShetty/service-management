import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "EmailId": "",
    "Password": ""
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res: any)=> {
      if(res.result) {
        alert('Login Success');
        localStorage.setItem('angular18Token', res.data.token);
        // to navigate to the dashboard page
        this.router.navigateByUrl('dashboard')

        // ------ to open in new window
        // window.location.href = 'https://staging.d25g6vmjzclk4s.amplifyapp.com';
      } else {
        alert(res.message);
      }
    })
  }
}
