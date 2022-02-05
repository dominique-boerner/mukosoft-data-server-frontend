import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MedicationComponent} from "./pages/medication/medication.component";
import {RecipesComponent} from "./pages/recipes/recipes.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "medication", component: MedicationComponent },
  { path: "recipes", component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModules {}
