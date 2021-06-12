import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'reactive-app';
}

export class User {
	login: string
	surname: string
	tel: number
	adress: string
	constructor(login: string, surname: string, tel: number, adress: string) {
		this.login = login;
		this.surname = surname;
		this.tel = tel;
		this.adress = adress;

	}

}

export let usersBase: Array<User> = [];



createUser('firstUserLogin', 'Mazurenko', 8914888888, 'Novosibirsk');
createUser('secondUserLogin', 'Mazarova', 8914845345, 'Novosibirsk');


function createUser(login: string, surname: string, tel: number, adress: string): void {
	let newUser: User = new User(login, surname, tel, adress);
	usersBase.push(newUser)
}
