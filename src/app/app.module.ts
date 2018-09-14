import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HomeComponent } from './components/home/home.component';
import { ServerDetailsComponent } from './components/server-details/server-details.component';
import { AlertmatrixComponent } from './components/alertmatrix/alertmatrix.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertmatrixDetailsComponent } from './components/alertmatrix/alertmatrix-details.component';
import { ServerViewDetailsComponent } from './components/server-details/server-view-details.component';
import { IntegrationServicesComponent } from './components/integration-services/integration-services.component';
import { AlertDetailsComponent } from './components/alerts/alert-details.component';
import { MakeCallComponent } from './components/make-call/make-call.component';

@NgModule({
    declarations: [
        AppComponent,
        AppNavbarComponent,
        CoursesListComponent,
        HomeComponent,
        ServerDetailsComponent,
        AlertmatrixComponent,
        AlertsComponent,
        AlertmatrixDetailsComponent,
        ServerViewDetailsComponent,
        IntegrationServicesComponent,
        AlertDetailsComponent,
        MakeCallComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
