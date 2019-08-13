import { Component, OnInit } from '@angular/core';
import { Organisation } from '../organisation';
import { OrganisationdataService } from '../organisationdata.service';

@Component({
  selector: 'app-organisationadd',
  templateUrl: './organisationadd.component.html',
  styleUrls: ['./organisationadd.component.css']
})
export class OrganisationaddComponent implements OnInit {
  org_name:string;
  org_desc:string;
  org_add1:string;
  org_add2:string;
  org_city:string;
org_state:string;
  org_zip:number;
  org_country:string;
  org_phone1:number;
  org_phone2:number;
  org_website:string;
  org_fax:string;
  arr:Organisation[]=[];

  constructor(private _data:OrganisationdataService) { }

  ngOnInit() {
  }

  onAddOrg() {
    this.arr.push(new Organisation(this.org_name,this.org_desc,this.org_add1,this.org_add2,this.org_city,this.org_state,this.org_zip,this.org_country,this.org_phone1,this.org_phone2,this.org_website,this.org_fax));
  }

}

