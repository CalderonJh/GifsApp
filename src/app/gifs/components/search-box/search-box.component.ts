import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {GifsSearchService} from "../../services/gifs-search.service";

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html',
})

export class SearchBoxComponent {

  @ViewChild('tagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @ViewChild('title')
  public searchTitle!: ElementRef<HTMLTitleElement>;


  constructor( private gifsSearchService: GifsSearchService) {

  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsSearchService.searchTag(newTag);
    this.setSearchTitleValue(newTag)
  }


  @Input()
  setSearchTitleValue(value:string):void{
    this.searchTitle.nativeElement.innerHTML = `<h5>Results for '${value}'</h5>`;
  }

}
