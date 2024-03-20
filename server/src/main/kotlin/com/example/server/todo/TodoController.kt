package com.example.server.todo

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/todos")
class TodoController(
    private val todoService: TodoService
) {
    @GetMapping
    fun getTodo(): List<String> {
        return todoService.getTodo()
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun saveTodo(@RequestBody todo: String) {
        todoService.saveTodo(todo)
    }
}