import { Component, OnInit } from '@angular/core';
import { Cars, Car } from './car.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carsState: Observable<Cars>;

  ngOnInit(): void {
  
    this.carsState = this.store.select('carPage');
  };

  constructor(private store: Store<AppState>){

  }

}
