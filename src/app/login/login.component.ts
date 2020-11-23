import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
 
  Validators
} from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.css"]
})
export class loginComponent {
  namee:string;
    passs:string;
  loginForm: any;
  constructor() {
    this.loadForm();
  }
  loadForm() {
    this.loginForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      pass: new FormControl("", [Validators.required])
    });
  }
  chname() {
   
       this.namee=this.loginForm.get("name").value;
        console.log(this.namee);
        if(this.namee!="viki"){

          alert("Invalid username");
          this.loginForm.setValue({name:"",pass:""});
        }
  }
   ckpass() {
   
      
        if(this.loginForm.get("pass").value!="1234"){

          alert("Invalid password");
          this.loginForm.setValue({name:"",pass:""});
        }
  }
}
