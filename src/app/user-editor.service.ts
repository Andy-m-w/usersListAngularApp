import { Injectable } from '@angular/core';


let currentId = 1;
export class User {
	[key: string]: string | number;
	id: number;
	login: string
	name: string
	tel: string
	adress: string


	constructor(login: string, name: string, tel: string, adress: string) {
		this.login = login;
		this.name = name;
		this.tel = tel;
		this.adress = adress;
		this.id = currentId++;
	}
}


@Injectable({
	providedIn: 'root'
})

export class UserEditorService {
	constructor() { }
	static usersBase: User[] = [
		// {
		// 	// login: 'defaultUser',
		// 	// id: 1,
		// 	// name: 'surnam1',
		// 	// tel: "99",
		// 	// adress: 'adress1'
		// },

	];

	static getUsersList(): User[] {
		return this.usersBase;
	};
	static getUserByLogin(login: string | null): User {
		let userIndex: number = this.usersBase.findIndex(elem => {
			return elem.login === login;
		});
		return this.usersBase[userIndex]
	}

	static createUser(login: string, name: string, tel: string, adress: string): void {
		let newUser: User = new User(login, name, tel, adress);
		this.usersBase.push(newUser);
	}

	static deleteUser(user: User) {
		if (this.usersBase.length > 0) {
			let userIndex: number = this.usersBase.findIndex(elem => {
				return elem.id == user.id;
			});
			// if (userIndex === -1) { return 'User not found' }
			this.usersBase.splice(userIndex, 1);
		}
	}
}
