import { Component, OnInit } from '@angular/core';
import {GifsSearchService} from "../../services/gifs-search.service";
import {GifRes} from "../../interfaces/gif-response.iterface";

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit{

  constructor(private gifsService:GifsSearchService) {}

  get getGifs(): GifRes[] {
    return this.gifsService.gifList;
  }

  ngOnInit(): void {
    this.gifsService.onAppInit();
  }
}
