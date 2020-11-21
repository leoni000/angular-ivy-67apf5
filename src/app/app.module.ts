import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { loginComponent } from "./login.component";
import { registrationComponent } from "./registration.component";
import { bookingComponent } from "./booking.component";
import { paymentComponent } from "./payment.component";
import { reportComponent } from "./report.component";
import { adminComponent } from "./admin.component";
import { adminloginComponent } from "./adminlogin.component";
import { addComponent } from "./add.component";
import { modComponent } from "./mod.component";

import { ComService } from "./communication.service";


const appRoutes: Routes = [
  { path: "login", component: loginComponent },
  { path: "home", component: HomeComponent },
  { path: "registration", component: registrationComponent },
  { path: "booking", component: bookingComponent },
  { path: "payment", component: paymentComponent },
  { path: "report", component: reportComponent },
  { path: "admin", component: adminComponent },
  { path: "adminlogin", component: adminloginComponent },
  {path: "add", component:addComponent},
  {path: "mod", component:modComponent},
  { path: "", redirectTo: "/login", pathMatch: "full" }
  
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes, {})],
  declarations: [
    AppComponent,
    HomeComponent,
    loginComponent,
    registrationComponent,
    bookingComponent,
    paymentComponent,
    reportComponent,
    adminComponent,
    adminloginComponent,
    addComponent,modComponent
  ],
  bootstrap: [AppComponent],
  providers: [ComService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
