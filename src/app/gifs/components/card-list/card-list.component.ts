import {Component, Input} from '@angular/core';
import {GifRes} from "../../interfaces/gif-response.iterface";

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()
  public gifs: GifRes[] = [];

}
