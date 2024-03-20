import {Http, NetworkHttp} from '../http/NetworkHttp.ts'

export interface TodoRepository {
    getTodo(): Promise<string[]>
    saveTodo(todo: string): void
}

export class DefaultTodoRepository implements TodoRepository {
    http: Http
    constructor(http = new NetworkHttp()) {
        this.http = http
    }
    saveTodo(todo: string): void {
        this.http.post('/api/todos', todo)
    }

    getTodo(): Promise<string[]> {
        return this.http.get('/api/todos')
    }
}