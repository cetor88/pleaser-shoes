import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateFormRegister!: FormGroup;

  constructor(private fb: FormBuilder){}

  submitForm(): void {
    console.log('submit', this.validateFormRegister.value);
  }

  ngOnInit(): void {
    this.validateFormRegister = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required]]
    });
  }

}
