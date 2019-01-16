import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { LoadCars } from 'src/redux/cars.action';
import { Car } from './car.model';

@Injectable()
export class CarsService {
    static BASE_URL: string = 'http://localhost:3000/';
    
    constructor(private http: Http,private store: Store<AppState> ){

    }

    loadCars():void{
        this.http.get(CarsService.BASE_URL + 'cars').map((response : Response) => response.json()).toPromise().then((cars: Car[]) => {
            this.store.dispatch(new LoadCars(cars));
        })
    }
}