import { Component, OnInit} from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { AppState } from 'src/redux/app.state';
import { Store } from '@ngrx/store';
import { AddCar } from 'src/redux/cars.action';


@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName: string = '';
  carModel: string = '';
  private id: number = 2;

  constructor(private store: Store<AppState>) { 
    console.log(store);
  }

  ngOnInit() {
  }

  onAdd(){
    if(this.carName === '' || this.carModel ==='') { return }
    this.id++;
    const car: Car = new Car(this.carName,moment().format('DD.MM.YY'),this.carModel,false,this.id);

    this.store.dispatch(new AddCar(car));
    //this.store.dispatch()
    this.carModel = '';
    this.carName = '';
  }

  onLoad(){

  }
}
