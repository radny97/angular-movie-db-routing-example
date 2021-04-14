import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie>;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getMovie(params.get('id')))
    )
  }

  goToMovies() {
  }
}
