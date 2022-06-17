import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component'

const routes: Routes = [
  {path: '', component:EmployeesComponent},
  {path: 'edit/:', component:EmployeeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
