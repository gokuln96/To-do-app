import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.minLength(8)]
    })
  }

  onSubmit(){
    console.log(this.loginForm)
    this.http.post('https://sample',this.loginForm.value).subscribe()
  }

}
