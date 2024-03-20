package com.example.server.todo

class SpyTodoService: TodoService {
    var getTodo_wasCalled: Boolean = false
    override fun getTodo(): List<String> {
        getTodo_wasCalled = true
        return emptyList()
    }

    var saveTodo_wasCalled: Boolean = false
    var saveTodo_argument_todo: String? = null
    override fun saveTodo(todo: String) {
        saveTodo_wasCalled = true
        saveTodo_argument_todo = todo
    }
}