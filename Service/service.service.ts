import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../Modelo/Libro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/rest_sprboot_nsw/libros'

  getLibros(){
    return this.http.get<Libro[]>(this.Url);
  }
}
