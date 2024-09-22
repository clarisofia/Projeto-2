import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';  // URL do json-server

  constructor(private http: HttpClient) {}

  // Método para obter todas as tarefas
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para adicionar uma nova tarefa
  addTask(task: string): Observable<any> {
    const newTask = { task };
    return this.http.post<any>(this.apiUrl, newTask);
  }

  // Método para remover uma tarefa
  removeTask(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
