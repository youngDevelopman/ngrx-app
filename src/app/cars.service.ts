import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { LoadCars, UpdateCar, AddCar } from 'src/redux/cars.action';
import { Car} from './car.model';
import { map, tap } from "rxjs/operators";
import { HttpClient} from '@angular/common/http';


@Injectable()
export class CarsService {
    static BASE_URL: string = 'http://localhost:3000/';
    
    constructor(private http: HttpClient,private store: Store<AppState> ){

    }

    loadCars():void{
        console.log("http://localhost:3000/cars")
        
        this.http.get<Car[]>(CarsService.BASE_URL + 'cars').subscribe(data => {
            this.store.dispatch(new LoadCars(data));
        })

    }

    addCar(car:Car){
        this.http.post<Car>(CarsService.BASE_URL + 'cars', car).subscribe((data) =>{
            this.store.dispatch(new AddCar(data))
        })
    }
}