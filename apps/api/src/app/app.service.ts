import { Todo } from '@jmw/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getTodos(): Todo[] {
		return [{ title: 'Fix my computer!' }, { title: 'Fix my desk' }];
	}
}
