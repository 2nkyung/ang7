import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Board } from './board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private baseUrl:string = 'http://localhost:88/';
  constructor() { }

  getBoardInfoService(board:Board){
    return ajax.get(this.baseUrl + 'boardinfos');
  }
  getBoardInfo(biNum:number){
    return ajax.get(this.baseUrl + 'boardinfo?biNum=' + biNum);
  }
}
