import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';


@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName: string = '';
  carModel: string = '';
  private id: number = 2;

  @Output() addCar:EventEmitter<Car> = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    if(this.carName === '' || this.carModel ==='') { return }
    this.id++;
    const car: Car = new Car(this.carName,moment().format('DD.MM.YY'),this.carModel,false,this.id);


    this.addCar.emit(car);
    this.carModel = '';
    this.carName = '';
  }

  onLoad(){

  }
}
