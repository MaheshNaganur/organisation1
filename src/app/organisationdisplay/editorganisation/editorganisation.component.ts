import { Component, OnInit } from '@angular/core';
import { OrganisationdataService } from '../organisationdata.service';
import { ActivatedRoute } from '@angular/router';
import { Organisation } from '../organisation';


@Component({
  selector: 'app-editorganisation',
  templateUrl: './editorganisation.component.html',
  styleUrls: ['./editorganisation.component.css']
})
export class EditorganisationComponent implements OnInit {

  Name:string="";
  Desc:string="";
  Add1:string="";
  Add2:string="";
  City:string="";
  State:string="";
  Zip:number;
  Country:string="";
  Phone1:number;
  Phone2:number;
  Website:string="";
  Fax:string="";




  constructor( private _act: ActivatedRoute,
    private _data: OrganisationdataService) { }

  ngOnInit() {

    this.Name= this._act.snapshot.params["org_name"];


    this._data.getOrgByName(this.Name).subscribe(
      (data:Organisation[])=>{



        this.Name=data[0].org_name;
        this.Desc=data[0].org_desc;
        this.Add1=data[0].org_add1;
        this.Add2=data[0].org_add2;
        this.City=data[0].org_city;
        this.State=data[0].org_state;
        this.Zip=data[0].org_zip;
        this.Country=data[0].org_country;
        this.Phone1=data[0].org_phone1;
        this.Phone2=data[0].org_phone2;
        this.Website=data[0].org_website;
        this.Fax=data[0].org_fax;
    });
  }
  onEditOrg(f){
      this._data.editOrg(this.Name,f.value).subscribe(
        (data:any)=>{
          alert('updated');
        }
      );
  }

}
