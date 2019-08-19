import { Todo } from '@jmw/data';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get('todos')
	getTodos(): Todo[] {
		return this.appService.getTodos();
	}
}
