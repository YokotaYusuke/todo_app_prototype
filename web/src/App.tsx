import {useEffect, useState} from 'react'
import {DefaultTodoRepository, TodoRepository} from './repository/TodoRepository.tsx'

interface Props {
    todoRepository?: TodoRepository
}

export default function App(
    {todoRepository = new DefaultTodoRepository()}: Props
) {
    const {
        setDraftText,
        draftText,
        todos,
        saveButtonClick,
    } = useApp(todoRepository)

    return (
        <>
            <label>
                todoを追加
                <input type="text" onChange={e => setDraftText(e.target.value)} value={draftText}/>
            </label>
            <button onClick={saveButtonClick}>保存</button>
            {todos.map(todo => (
                <div key={window.crypto.randomUUID()}>{todo}</div>
            ))}

        </>
    )
}

function useApp(todoRepository: TodoRepository) {
    const [draftText, setDraftText] = useState<string>('')
    const [todos, setTodos] = useState<string[]>([])

    function saveButtonClick() {
        todoRepository.saveTodo(draftText)
        setTodos([...todos, draftText])
        setDraftText('')
    }

    useEffect(() => {
        todoRepository.getTodo()
            .then(todos => setTodos(todos))
    }, [todoRepository])

    return {
        setDraftText,
        draftText,
        todos,
        saveButtonClick,
    }
}