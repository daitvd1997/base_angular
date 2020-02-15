import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

const MainterialConponents = [
  CommonModule,
  Material.MatToolbarModule,
  Material.MatGridListModule,
  Material.MatFormFieldModule,
  Material.MatInputModule,
  Material.MatRadioModule,
  Material.MatSelectModule,
  Material.MatCheckboxModule,
  Material.MatDatepickerModule,
  Material.MatNativeDateModule,
  Material.MatButtonModule,
  Material.MatSnackBarModule,
  Material.MatTableModule,
  Material.MatIconModule,
  Material.MatPaginatorModule,
  Material.MatSortModule,
  Material.MatSidenavModule,
  Material.MatListModule,
  Material.MatToolbarModule,
  Material.MatCardModule
];
@NgModule({
  imports: [
    MainterialConponents
  ],
  exports: [
    MainterialConponents
  ],
  declarations: []
})
export class MaterialModule { }
