import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/user'

  Get(){
    return this.http.get(this.apiurl + '/')
  }

  Getcode(code: any){
    return this.http.get(this.apiurl + '/' + code);
  }

  register(inputdata:any){
    return this.http.post(this.apiurl, inputdata);
  }

  deleteMethod(id:number){
    return this.http.delete(this.apiurl+ '/' +id)
  }

}
