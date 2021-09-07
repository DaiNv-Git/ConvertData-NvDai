import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movies } from '../movies';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private service:HttpClient) { }

  getlistmovies():Observable<movies[]>{
    return this.service.get<movies[]>('https://60ed9187a78dc700178adfde.mockapi.io/movie/movies');
  }

  addnew(newmovie:movies):Observable<movies>{
    return this.service.post<movies>('https://60ed9187a78dc700178adfde.mockapi.io/movie/movies',newmovie);
  }

  editmovies(id:number,editmovie : movies):Observable<movies>{
    return this.service.put<movies>('https://60ed9187a78dc700178adfde.mockapi.io/movie/movies/'+id,editmovie);
  }

  deletemovie(id:number):Observable<void>{
    return this.service.delete<void>('https://60ed9187a78dc700178adfde.mockapi.io/movie/movies/'+id);
  }

}
