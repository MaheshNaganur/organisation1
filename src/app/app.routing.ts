import { Routes,RouterModule } from "@angular/router";
import { EditorganisationComponent } from './organisationdisplay/editorganisation/editorganisation.component';
import { OrganisationdisplayComponent } from './organisationdisplay/organisationdisplay.component';
import { OrganisationaddComponent } from './organisationdisplay/organisationadd/organisationadd.component';




const arr : Routes=[
{path:'',component:OrganisationdisplayComponent},
// {path:'addorg',component:OrganisationaddComponent},
// {path:'editorganisation/:org_name',component:EditorganisationComponent}
];


export const routing=RouterModule.forRoot(arr);
