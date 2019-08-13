import { Component, OnInit } from '@angular/core';
import { Organisation } from './organisation';
import { OrganisationdataService } from './organisationdata.service';
import { Router } from "@angular/router";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-organisationdisplay',
  templateUrl: './organisationdisplay.component.html',
  styleUrls: ['./organisationdisplay.component.css']
})
export class OrganisationdisplayComponent implements OnInit {
  closeResult: string;
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
     arr:Organisation[]=[
      new Organisation('Tata cunsultancy services','Top It company in india','J P nagar','shetter colony','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.tata.com','233'),
      new Organisation('Wipro PVT LTD','IT Company','hebbal','shetter colony','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.wipro.com','233'),
      new Organisation('Sky cliff IT','Software products and services','gandhi nagar','shetter colony','dharwad','Karnataka',565425,'India',9875434345,8765432143,'www.skycliff.com','233'),
      new Organisation('Infosys','IT company','hebbal','shetter colony','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.infosys.com','233')

    ];



  constructor(private _data:OrganisationdataService,private _router:Router,private modalService: NgbModal) { }

  ngOnInit() {
  }
  onOrganisationDelete(item:Organisation){

        var userPreference;
        if (confirm("Do you want to delete?") == true){
          this.arr.splice(this.arr.indexOf(item),1);
           alert('deleted successfully');
      }
      else {
        userPreference = "Save Cancelled!";
    }
  }

  onOrganisationEdit(item:Organisation)
  {
this._router.navigate(["/editorganisation",item.org_name]);
  }

  onSearch(value)
  {if (value != "") {

    this.arr = this.arr.filter(x => x.org_name.indexOf(value) != -1);

  }

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'},).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onAddOrg() {
this.arr.push(new Organisation(this.org_name,this.org_desc,this.org_add1,this.org_add2,this.org_city,this.org_state,this.org_zip,this.org_country,this.org_phone1,this.org_phone2,this.org_website,this.org_fax));

  }

  onEditOrg(f){
    this._data.editOrg(this.org_name,f.value).subscribe(
      (data:any)=>{
        alert('updated');
      }
    );
}

}
