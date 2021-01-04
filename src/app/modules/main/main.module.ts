import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [DashboardComponent, ShellComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
