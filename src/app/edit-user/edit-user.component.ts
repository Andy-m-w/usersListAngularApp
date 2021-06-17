import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router'
import { User, UserEditorService } from '../user-editor.service';


@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./edit-user.component.scss'],
	providers: [UserEditorService]
})
export class EditUserComponent implements OnInit {

	currentUserLogin: string | null = this.activeRoutes.snapshot.paramMap.get("userLogin");

	//creating or editing
	condition: boolean = (this.currentUserLogin === 'createUser' ? true : false)


	//addUser
	user: User = new User('', '', '', '')

	addUser(): void {
		UserEditorService.createUser(this.user.login, this.user.name, this.user.tel, this.user.adress)
		this.router.navigate(['/users'])
	};

	//editUser
	currentUser: User = UserEditorService.getUserByLogin(this.currentUserLogin);

	editUser(form: NgForm): void {
		for (let property in form.value) {
			if (this.currentUser[property]) {
				this.currentUser[property] = form.value[property]
			}
		}
		this.router.navigate(['/users'])
	};
	deleteUser() {
		UserEditorService.deleteUser(this.currentUser)
	}
	fillList() {
		UserEditorService.creatDefaultUsers();
	}
	constructor(
		private activeRoutes: ActivatedRoute,
		private router: Router,

	) { }


	ngOnInit(): void {


	}

}
