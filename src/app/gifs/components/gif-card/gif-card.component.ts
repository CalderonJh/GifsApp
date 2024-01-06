import {Component, Input, OnInit} from '@angular/core';
import {GifRes} from "../../interfaces/gif-response.iterface";

@Component({
  selector: 'gifs-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent implements OnInit{
  @Input()
  public gif!: GifRes;


  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is undefined')
  }
}
