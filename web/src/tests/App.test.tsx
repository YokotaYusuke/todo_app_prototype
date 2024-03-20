import {act, render, screen} from '@testing-library/react'
import App from '../App.tsx'
import {expect} from 'vitest'
import userEvent from '@testing-library/user-event'
import {DummyTodoRepository, SpyTodoRepository, StubTodoRepository} from './SpyTodoRepository.tsx'
import {TodoRepository} from '../repository/TodoRepository.tsx'


describe('App', () => {

    describe('初期状態', () => {
        test('初期状態ではインプットには何も表示されていない', async () => {
            await renderApp()


            const input = screen.getByLabelText('todoを追加') as HTMLInputElement
            expect(input.value).toEqual('')
        })

        test('インプットに文字を入力できる', async () => {
            await renderApp()


            const input = screen.getByLabelText('todoを追加') as HTMLInputElement
            await userEvent.type(input, 'todo1')


            expect(input.value).toEqual('todo1')
        })
    })

    describe('初期レンダリング時', () => {
        test('todoRepositoryのgetTodoを呼ぶ', async () => {
            const spyTodoRepository = new SpyTodoRepository()
            await renderApp(spyTodoRepository)


            expect(spyTodoRepository.getTodo_wasCalled).toBeTruthy()
        })

        test('todoRepositoryのgetTodoを呼んでtodoを表示する', async () => {
            const stubTodoRepository = new StubTodoRepository()
            stubTodoRepository.getTodo_ReturnValue = Promise.resolve([
                'todo1',
                'todo2',
            ])


            await renderApp(stubTodoRepository)


            expect(screen.getByText('todo1')).toBeInTheDocument()
            expect(screen.getByText('todo2')).toBeInTheDocument()
        })
    })

    describe('保存ボタンを押した時', () => {
        test('保存ボタンを押すとインプットに入力したtodoが表示される', async () => {
            await renderApp()


            await saveTodo('save todo')


            expect(screen.getByText('save todo')).toBeInTheDocument()
        })

        test('todoを複数保存できる', async () => {
            await renderApp()


            await saveTodo('todo1')
            await saveTodo('todo2')


            expect(screen.getByText('todo1')).toBeInTheDocument()
            expect(screen.getByText('todo2')).toBeInTheDocument()
        })

        test('保存ボタンを押した時にtodoRepositoryのsaveTodoを正しく呼んでいるか', async () => {
            const spyTodoRepository = new SpyTodoRepository()
            await renderApp(spyTodoRepository)


            await saveTodo('todo1')


            expect(spyTodoRepository.saveTodo_argument_todo).toEqual('todo1')
        })
    })

    async function saveTodo(todo: string) {
        const textInput = screen.getByLabelText('todoを追加')
        const saveButton = screen.getByText('保存')
        await userEvent.type(textInput, todo)
        await userEvent.click(saveButton)
    }

    async function renderApp(todoRepository: TodoRepository = new DummyTodoRepository()) {
        await act(async () => {
            render(<App todoRepository={todoRepository}/>)
        })
    }
})