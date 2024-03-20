package com.example.server.todo

class StubTodoService: TodoService {
    var getTodo_returnValue: List<String> = emptyList()
    override fun getTodo(): List<String> {
        return getTodo_returnValue
    }

    override fun saveTodo(todo: String) {
    }
}