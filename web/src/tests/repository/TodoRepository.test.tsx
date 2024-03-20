import {expect} from 'vitest'
import {DefaultTodoRepository} from '../../repository/TodoRepository.tsx'
import {SpyHttp} from '../http/SpyHttp.ts'
import {StubHttp} from '../http/StubHttp.ts'

describe('TodoRepository', () => {
    describe('getTodo', () => {
        test('httpに正しいリクエストを渡す', () => {
            const spyHttp = new SpyHttp()
            const repository = new DefaultTodoRepository(spyHttp)


            repository.getTodo()


            expect(spyHttp.get_argument_url).toEqual('/api/todos')
        })

        test('httpの返り値を正しく返す', async () => {
            const stubHttp = new StubHttp()
            stubHttp.get_returnValue = Promise.resolve([
                'todo1',
                'todo2'
            ])
            const repository = new DefaultTodoRepository(stubHttp)


            const todos = await repository.getTodo()


            expect(todos).toEqual(['todo1', 'todo2'])
        })
    })

    describe('saveTodo', () => {
        test('httpに正しいリクエストを渡す', () => {
            const spyHttp = new SpyHttp()
            const repository = new DefaultTodoRepository(spyHttp)


            repository.saveTodo('post todo')


            expect(spyHttp.post_argument_url).toEqual('/api/todos')
            expect(spyHttp.post_argument_body).toEqual('post todo')
        })
    })
})