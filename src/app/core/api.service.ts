import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, Task, User } from '../app.component';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    serverUrl = environment.serverUrl; //'http://localhost:3000/'

    // private token = ''
    private TOKEN_KEY = 'token'

    setToken(value: string) {
        localStorage.setItem(this.TOKEN_KEY, value);
        // this.token = value;
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) || '';
        // return this.token
    }

    deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    constructor(private http: HttpClient) { }

    getUserPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
    }

    getTasks(): Observable<Array<Task>> {
        return this.GET<Array<Task>>(`tasks`);
    }

    addTask(task: Task): Observable<Task> {
        // return this.http.post<Task>(
        //     `${this.serverUrl}tasks`,
        //     task,
        //     { headers: { 'Content-Type': 'application/json' } }
        // )
        return this.POST<Task>('tasks', task);
    }

    addProject(project: Project): Observable<Project> {
        return this.POST<Project>('projects', project);
    }

    getProjects(): Observable<Array<Project>> {
        return this.GET<Array<Project>>(`projects`);
    }

    getOneProject(id: string): Observable<Project> {
        return this.GET<Project>(`projects/${id}`);
    }

    GET<DynamicType>(endpoint: string): Observable<DynamicType> {
        return this.http.get<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            {
                headers: {
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
        return this.http.post<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    deleteTask(id: string): Observable<Task> {
        return this.http.delete<Task>(
            `${this.serverUrl}tasks/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }


    deleteProject(id: string): Observable<Project> {
        return this.http.delete<Project>(
            `${this.serverUrl}projects/${id}`,
            {
                headers: {
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    updateTask(id: string, task: Task): Observable<Task> {
        return this.http.put<Task>(
            `${this.serverUrl}tasks/${id}`,
            task,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    updateProject(id: string, project: Project): Observable<Project> {
        return this.http.put<Project>(
            `${this.serverUrl}projects/${id}`,
            project,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    signup(user: User): Observable<User> {
        return this.POST<User>('users/signup', user);
    }

    login(user: User): Observable<User> {
        return this.POST<User>('users/login', user);
    }
}
