import { Component, Input} from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { DeleteCar, UpdateCar } from 'src/redux/cars.action';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;

  constructor(private store: Store<AppState>, private carsService: CarsService){
    
  }

  onDelete(){
    console.log(this.car);
      this.carsService.deleteCar(this.car);
  }

  onBuy(){
      this.car.isSold = true;
      this.carsService.updateCar(this.car)
  }
}
