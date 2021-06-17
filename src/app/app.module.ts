import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserEditorService } from './user-editor.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

const routes: Routes = [
	{ path: '', component: NavigatorComponent },
	{ path: 'users', component: UserInfoComponent },
	{ path: 'users/:userLogin', component: EditUserComponent },
	{ path: 'users/createUser', component: EditUserComponent },

];

@NgModule({
	declarations: [
		AppComponent,
		UserInfoComponent,
		EditUserComponent,
		NavigatorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(routes),
		NgbModule,
		FormsModule
	],
	exports: [RouterModule],
	providers: [UserEditorService],
	bootstrap: [AppComponent]
})
export class AppModule { }
