import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {PanelMenuModule} from "primeng/panelmenu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import {AppRoutingModules} from "./app-routing.modules";
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MedicationComponent } from './pages/medication/medication.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import {CardModule} from "primeng/card";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoadingElementComponent } from './components/loading-element/loading-element.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderBarComponent,
    DashboardComponent,
    MedicationComponent,
    RecipesComponent,
    LoadingElementComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    ButtonModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    AppRoutingModules,
    CardModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    MessageModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
