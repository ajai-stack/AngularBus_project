import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
deleteUser: any;

  
  constructor(private service:ServiceService){
   this.Getlist();
  }
  
  userlist:any;
  dataSource:any;
 

  Getlist(){
    this.service.Get().subscribe(res=>{
      this.userlist = res;
      this.dataSource=new MatTableDataSource(this.userlist)
    })
  }

  deleteCustomer(id:any){
        this.service.deleteMethod(id).subscribe(res=>{
          this.Getlist();
           alert('do you have to delete')
        } )   
  }
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','password','mobilenumber','Action'];
  
}
