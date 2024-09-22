import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';  // Importa o serviço

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];  // Lista de tarefas
  newTask: string = '';  // Nova tarefa inserida no formulário

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Método para carregar todas as tarefas da API
  loadTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  // Método para adicionar uma nova tarefa
  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim()).subscribe((task) => {
        this.tasks.push(task);
        this.newTask = '';  // Limpa o campo de entrada após a adição
      });
    }
  }

  // Método para remover uma tarefa da lista
  removeTask(taskId: number): void {
    this.taskService.removeTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
    });
  }
}
