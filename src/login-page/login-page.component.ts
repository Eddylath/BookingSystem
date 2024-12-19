import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(
    private router: Router
  ) {}

  submit() {
    this.router.navigate(['/dashboard']);
  }

  change(event: Event) {
    this.restrictSubmit();
  }

  restrictSubmit() {
    if (!this.password || !this.username)
      return true;
    else
      return this.username?.nativeElement?.value === '' || this.password?.nativeElement?.value === '';
  }
}
