import { Car } from '../app/car.model'
import { CAR_ACTION, CarsAction } from './cars.action';

const initialState = {
    cars:[
    new Car("Ford", "12/12/12", "Focus", false, 1),
    new Car("Audi", "08/12/12", "A4", false, 2)
    ]
}

export function carsReducer(state = initialState, action: CarsAction){
    switch(action.type){
        case CAR_ACTION.ADD_CAR:{
            return{
                ...state,
                cars: [...state.cars, action.payload]
            }
        }
        case CAR_ACTION.DELETE_CAR:{
            return{
                ...state,
                cars: [...state.cars.filter(c => c.id != action.payload.id)]
            }
        }
        default: 
            return state;
    }
}