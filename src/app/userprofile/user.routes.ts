import { Routes } from "@angular/router";
import { UserprofileComponent } from "./userprofile.component";
import { UserdetailComponent } from "./userdetail.component";
import { UsereditComponent } from "./useredit.component";


export const  UserRouting: Routes = [
    { path:'',component: UserdetailComponent},
    { path: 'edit/:id', component:UsereditComponent },
    
    
    
  ];