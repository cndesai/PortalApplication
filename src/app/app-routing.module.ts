import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertmatrixComponent } from './components/alertmatrix/alertmatrix.component';
import { ServerDetailsComponent } from './components/server-details/server-details.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertmatrixDetailsComponent } from './components/alertmatrix/alertmatrix-details.component';
import { ServerViewDetailsComponent } from './components/server-details/server-view-details.component';
import { IntegrationServicesComponent } from './components/integration-services/integration-services.component';
import { AlertDetailsComponent } from './components/alerts/alert-details.component';
import { MakeCallComponent } from './components/make-call/make-call.component';

const routes: Routes = [
	/** Setting default route - set path as empty and set the component */
	{ path: '', component: HomeComponent },
	{ path: 'courses', component: CoursesListComponent },
	{ path: 'servermanagement', component: ServerDetailsComponent },
	{ path: 'servermanagement/:id', component: ServerViewDetailsComponent },
	{ path: 'alertmatrix', component: AlertmatrixComponent },
	{ path: 'alerts', component: AlertsComponent },
	{ path: 'alerts/:id', component: AlertDetailsComponent },
	{ path: 'alertmatrix/:id', component: AlertmatrixDetailsComponent },
	{ path: 'integrationservices', component: IntegrationServicesComponent },
	{ path: 'makecall', component: MakeCallComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
