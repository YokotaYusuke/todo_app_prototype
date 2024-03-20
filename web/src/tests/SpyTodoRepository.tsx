import {TodoRepository} from '../repository/TodoRepository.tsx'

export class SpyTodoRepository implements TodoRepository{
    saveTodo_argument_todo: string | undefined = undefined
    saveTodo(todo: string): void {
        this.saveTodo_argument_todo = todo
    }

    getTodo_wasCalled: boolean = false
    getTodo(): Promise<string[]> {
        this.getTodo_wasCalled = true
        return Promise.resolve([])
    }
}

export class StubTodoRepository implements TodoRepository {
    saveTodo(todo: string): void {
    }

    getTodo_ReturnValue: Promise<string[]> = Promise.resolve([])
    getTodo(): Promise<string[]> {
        return this.getTodo_ReturnValue
    }

}

export class DummyTodoRepository implements TodoRepository {
    saveTodo(todo: string): void {
    }
    getTodo(): Promise<string[]> {
        return Promise.resolve([])
    }
}
