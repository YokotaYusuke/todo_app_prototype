package com.example.server.todo

import com.example.server.todo.entity.TodoRecord
import org.springframework.stereotype.Service


interface TodoService {
    fun getTodo(): List<String>
    fun saveTodo(todo: String)
}

@Service
class DefaultTodoService(
    private val todoRepository: TodoRepository
): TodoService {
    override fun getTodo(): List<String> {
        val todos = todoRepository.findAll()
        return todos.map { it.todo }
    }

    override fun saveTodo(todo: String) {
        todoRepository.save(TodoRecord(todo = todo))
    }
}