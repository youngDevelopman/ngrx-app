import { Car } from '../app/car.model'
import { Action } from '@ngrx/store';
import { CAR_ACTION, AddCar } from './cars.action';

const initialState = {
    cars:[
    new Car("Ford", "12/12/12", "Focus", false, 1),
    new Car("Audi", "08/12/12", "A4", false, 2)
    ]
}
export function carsReducer(state = initialState, action: AddCar){
    switch(action.type){
        case CAR_ACTION.ADD_CAR:{
            return{
                ...state,
                cars: [...state.cars, action.payload]
            }
        }
        default: 
            return state;
    }
}