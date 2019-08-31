import { Todo } from '@jmw/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getTodos(): Todo[] {
		return [{ title: 'Mock Data Item 1' }, { title: 'Mock Data Item 2' }];
	}
}
