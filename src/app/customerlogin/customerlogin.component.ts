import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  ngForm!: FormGroup;
  submit=false;
data:any; 
  constructor(private formbulider:FormBuilder,private service:ServiceService,private router: Router){}

  ngOnInit() {
    this.ngForm= this.formbulider.group({      
      firstname: ["",Validators.required],
      lastname : ["",Validators.required],
      email : ["",[Validators.required,Validators.email]],
      password : ["",Validators.required],
      mobilenumber :  ["",Validators.required],
      role:(''),
      isactive:(false)
    })
  }
  get fn() {
    return this.ngForm.controls;}
    
onClickSubmit(data:any){
this.submit=true;
if(this.ngForm.valid){
    this.service.register(this.ngForm.value).subscribe(res=>{
      alert('login successfully')
      window.location.reload();
    })  
}
}
}








