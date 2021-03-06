import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../board.service';
import { Board } from '../board';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  biNum:number;
  board:Board;
  constructor(private _router:ActivatedRoute,
    private _bs:BoardService) { }

  ngOnInit() {
    this._router.params.subscribe(param=>{
      this.biNum = param['biNum'];
    })
    console.log(this.biNum);
    this._bs.getBoardInfo(this.biNum).subscribe(res=>{
      console.log(res.response);
      this.board = res.response;
    });
  }

}
