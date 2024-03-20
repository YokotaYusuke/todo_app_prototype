package com.example.server.todo.entity

import jakarta.persistence.*
import java.util.UUID


@Entity
@Table(name = "todos")
data class TodoRecord(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: UUID = UUID.randomUUID(),

    val todo: String,
)
