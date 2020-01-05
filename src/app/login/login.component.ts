import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  
constructor(private fb:FormBuilder,private router: Router) { }
form = this.fb.group({
  username :(''),
  password :''
})

  ngOnInit() {
  }
  onSubmit(){
   
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      console.warn(this.form.value)
      alert("Authentification a réussi")
      this.router.navigate(['/home'])
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
