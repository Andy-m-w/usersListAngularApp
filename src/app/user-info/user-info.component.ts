import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User, UserEditorService } from '../user-editor.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'


@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss'],
	providers: [UserEditorService]
})
export class UserInfoComponent implements OnInit {
	userList: User[] = UserEditorService.getUsersList();
	condition: boolean = this.userList.length > 0;

	constructor(
		private usersEditor: UserEditorService,
		private activeRoute: ActivatedRoute
	) {
	}
	ngOnInit(): void {
	}



}