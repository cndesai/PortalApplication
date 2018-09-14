import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlertmatrixComponent } from "./alertmatrix.component";
import { AlertmatrixDetailsComponent } from "./alertmatrix-details.component";

const alertMatrixRouteConfig: Routes = [
	{
		path: '',
		component: AlertmatrixComponent
	},
	{
		path: ':id',
		component: AlertmatrixDetailsComponent
	}
];

export const alertMatrixRouting: ModuleWithProviders = RouterModule.forChild(alertMatrixRouteConfig);