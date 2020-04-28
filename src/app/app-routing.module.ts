import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubmitComponent } from "./components/submit/submit.component";
import { HooksComponent } from "./components/hooks/hooks.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";

const routes: Routes = [
  { path: "data-share", component: SubmitComponent },
  { path: "lifcycle-hooks", component: HooksComponent },
  { path: "data-binding", component: DatabindingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
