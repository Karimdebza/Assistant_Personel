import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserServiceTsService } from '../../services/user.service.ts.service';
import { IUser } from '../../interface/iuser';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,   NgIf ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


constructor(private userService:UserServiceTsService, private router:Router){

}


  public signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

   
  })


  public onSubmit() {
    if (this.signupForm.valid) {
      // Mapping explicite des données du formulaire
      const user: IUser = {
        firstName: this.signupForm.value.firstName!,
        username: this.signupForm.value.username!,
        lastName: this.signupForm.value.lastName!,
        email: this.signupForm.value.email!,
        password: this.signupForm.value.password!
      };
  
      // Appel au service
      this.userService.signup(user)
        .subscribe({
          next: (data: any) => {
            console.log('Signup successful:', data);
            this.router.navigate(['/home']);
          },
          error: (err) => {
            console.error('Signup failed:', err);
          }
        });
    } else {
      console.error('Form is invalid');
    }
  }

 
}
