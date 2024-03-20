package com.example.server.todo

import com.example.server.todo.entity.TodoRecord
import org.springframework.data.jpa.repository.JpaRepository

interface TodoRepository: JpaRepository<TodoRecord, String> {
}