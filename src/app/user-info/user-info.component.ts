import { Component, OnInit } from '@angular/core';
import { usersBase } from '../app.component'
@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
	userLogin = usersBase[0].login;
	userSurname = usersBase[0].surname;
	userTel = usersBase[0].tel;
	userAdress = usersBase[0].adress;

	constructor() {

	}

	ngOnInit(): void {
	}

	users = usersBase;

}
