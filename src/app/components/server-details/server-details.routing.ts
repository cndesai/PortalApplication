import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServerDetailsComponent } from "./server-details.component";
import { ServerViewDetailsComponent } from "./server-view-details.component";

const serverDetailsRouteConfig: Routes = [
	{
		path: '',
		component: ServerDetailsComponent
	},
	{
		path: ':id',
		component: ServerViewDetailsComponent
	}
];

export const serverDetailsRouting: ModuleWithProviders = RouterModule.forChild(serverDetailsRouteConfig);