import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  saveHistoryToLocalStorage(gifHistory:string[]){
    localStorage.setItem('history', JSON.stringify(gifHistory));
  }

  loadFromLocalStorage():string[]{
    const data = localStorage.getItem('history');
    if (!data) return [];
    else return JSON.parse(data)
  }

}
