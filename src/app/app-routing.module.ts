import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes : Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
    exports : [RouterModule],
    imports : [
        RouterModule.forRoot(routes)
    ],
    declarations : []

})
export class AppRoutingModule {

}