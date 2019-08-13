import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Organisation } from './organisation';

@Injectable({
  providedIn: 'root'
})
export class OrganisationdataService {
  arr:Organisation[]=[];
  constructor(private _http:HttpClient){ }


//   getAllOrg(){

//     return this._http.get(this.arr);

// }
  deleteOrganisation(org_name){
    let head=new HttpHeaders().set("Content-Type","application/json");
    return this._http.delete(this.arr+org_name,{headers:head});


  }

  editOrg(org_name,item)
  {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.arr+org_name, body, { headers: head });
  }

  getOrgByName(org_name)
  {
    return this._http.get(this.arr+org_name);

  }

}
