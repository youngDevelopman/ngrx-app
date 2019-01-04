import { Component } from '@angular/core';
import { Cars, Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car("Ford", "12/12/12", "Focus", false, 1),
    new Car("Audi", "08/12/12", "A4", false, 2)
  ];

  onAdd(car: Car){
    console.log("app comonent on add()");
    this.cars.push(car);
  }

  onDelete(car: Car){
    this.cars = this.cars.filter(c => c.id !== car.id);
  }
}
