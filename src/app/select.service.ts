import { Injectable } from '@angular/core';
import { Country } from './country';
import { State } from './state';
import { City } from './city';
@Injectable()
export class SelectService {

  getCountries() {
    return [
      new Country(1, 'USA'),
      new Country(2, 'India'),
    ];
  }

  getStates() {
    return [
      new State(1, 1, 'Arizona'),
      new State(2, 1, 'Alaska'),
      new State(3, 1, 'Florida'),
      new State(4, 1, 'Hawaii'),
      new State(5, 2, 'Madhya Pradesh'),
      new State(6, 2, 'Uttar pradesh'),
      new State(7, 2, 'Gujrat')
    ];
  }
  getCities(){
    return [
      new City(1, 1, 'Arizona'),
      new City(2, 1, 'Alaska'),
      new City(3, 1, 'Florida'),
      new City(4, 1, 'Hawaii'),
      new City(5, 2, 'Indore'),
      new City(6, 2, 'Delhi'),
      new City(7, 2, 'Surat')
    ];
  }

}
