import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';


@Component({
	selector: 'app-navigator',
	templateUrl: './navigator.component.html',
	styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
	isMainPage: boolean = true;
	constructor(
		private activeRoutes: ActivatedRoute,
		private router: Router

	) {

	}
	ngOnInit() {
		this.router.events.subscribe(() => {
			this.isMainPage = this.router.url === '/';
		})
	}

}
