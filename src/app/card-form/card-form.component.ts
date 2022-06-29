import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  users: any[] = [{
    lastName: 'Graffin',
    firstName: 'Cindy',
    email: 'graffincindy@gmail.com',
    company: 'M2I',
    phone: '0649607221'
  }]
  user: FormGroup = this.formBuilder.group({
    lastName: ['', [ Validators.required, Validators.minLength(2)]],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
  })

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    
  } // on injecte les dépendances que l'on souhaite utiliser dans le constructeur

  ngOnInit(): void {
  }

  private addUser() {
    this.users.unshift(this.user.value);
    this.user.reset();
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.user.valid ) {
      this.addUser()
    }
  }
  
  get form() {
    return this.user.controls;
  }
}
