import { TableComponent } from './components/table/table.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children : [
      {path: 'table', component: TableComponent},
    ]
  },
  {path: 'main', component: MainComponent},  
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
