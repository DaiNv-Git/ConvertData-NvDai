import { HttpErrorResponse, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { movies } from '../movies';
import { MovieserviceService } from '../service/movieservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mov: any;
  movies: any;

  constructor(private moveSer:MovieserviceService) { }

  movie:movies[]= [];
  editmovie:movies[]=[];
  edit_movie:any;

  ngOnInit(): void {
    this.getlistmovie();
    
  }

  getlistmovie(){
    this.moveSer.getlistmovies().subscribe(res =>{
      this.movie = res;
      this.editmovie = res;
    }, (loi:HttpErrorResponse)=>{
      alert(loi.error);
    });
  }

  addnewmove(addmovie:NgForm):void{
    console.log(addmovie);
    document.getElementById('addnewmovie')?.click();
    this.moveSer.addnew(addmovie.value).subscribe(res=>{
      this.getlistmovie();
      addmovie.reset(); // reset lai formm them moi
    }, (loi:HttpErrorResponse)=>{
      alert(loi.error);
    })
  }

  stt :number =0;

  intit(intedit:number){
    this.stt = intedit;
    
    this.edit_movie = Object.assign({},this.movie[this.stt]);
    //this.edit_movie = JSON.parse(JSON.stringify(this.editmovie[this.stt]));
  }

  editMovie():void{
    this.moveSer.editmovies(this.edit_movie.id,this.edit_movie).subscribe(res=>{
      this.getlistmovie();
    },(loi:HttpErrorResponse)=>{
      alert(loi.error);
    })
  }
 

  deletebook(id:number){
    if(confirm("Ban co chac muon xoa")){
      this.moveSer.deletemovie(id).subscribe(res=>{
        this.getlistmovie();
      },
      (loi:HttpErrorResponse)=> {
        alert(loi.error);
      });
    }
  }

  search(key:string):void{
    let results : movies[]=[];
    for(let e of this.movies){
      if(e.title.toLowerCase().indexOf(key.toLowerCase())!==-1
      || e.director.toLowerCase().indexOf(key.toLowerCase())!==-1
      || e.cast.toLowerCase().indexOf(key.toLowerCase())!==-1)
      
      {
        results.push(e);
      }
    }
    this.movies = results;
    if(results.length ===0|| !key){
      this.getlistmovie();
    }
  }
}
