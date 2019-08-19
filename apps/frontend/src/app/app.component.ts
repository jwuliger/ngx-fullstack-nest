import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@jmw/data';

import { Observable } from 'rxjs';

@Component({
	selector: 'jmw-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'frontend';
	todos: Observable<Todo[]>;

	constructor(http: HttpClient) {
		this.todos = http.get<Todo[]>('/api/todos');
	}
}
