import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginform!: FormGroup;  
  submit=false;
data:any; 

  constructor(private formbulider:FormBuilder,private service:ServiceService,private router: Router){}
  userdata:any
  ngOnInit() {
    this.loginform= this.formbulider.group({      
      Username: ["",Validators.required],
      password : ["",Validators.required],
    })
  }
  get fn() {
    return this.loginform.controls;}

    proceedlogin(){
      this.submit=true;
      if(this.loginform.valid){
      //     this.service.register(this.ngForm.value).subscribe(res=>{
      //       alert('login successfully')
      //     })          
      // }
      // else{
      //   alert('please enter the valid data')
      // }
      this.service.Getcode(this.loginform.value.Username).subscribe(res=>{
        this.userdata =res;
       
        if(this.userdata.password===this.loginform.value.password){
          if(this.userdata.isactive){
            sessionStorage.setItem('Username',this.userdata.id);
            sessionStorage.setItem('userrole',this.userdata.role);
            this.router.navigate(['/dashboard']);
          }
          else{
            alert(' please contact admin')
          }
        }
        else{
          alert('invalid password')
          window.location.reload();
        }
      })

      }

}
}
