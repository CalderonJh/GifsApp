import { Component, OnInit } from '@angular/core';
import {GifsService} from "../../services/gifs.service";
import {GifRes} from "../../interfaces/gif-response.iterface";

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit{

  constructor(private gifsService:GifsService) {}

  get getGifs(): GifRes[] {
    return this.gifsService.gifList;
  }

  ngOnInit(): void {
    this.gifsService.searchTrending();
  }
}
