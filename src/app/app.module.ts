import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
	{ path: 'users', component: UserInfoComponent },

];

@NgModule({
	declarations: [
		AppComponent,
		UserInfoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
