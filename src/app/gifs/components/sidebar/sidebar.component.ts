import {Component, EventEmitter, Output} from '@angular/core';
import {GifsSearchService} from "../../services/gifs-search.service";


@Component({
  selector: 'gifs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  showTrashButton: number | null = null;

  // @Output()
  // onSidebarSearch: EventEmitter<string> = new EventEmitter();

  constructor(
    private gifsSearchService: GifsSearchService) {}

  get getTags():string[]{
    return this.gifsSearchService.getTagsHistory;
  }

  onMouseEnter(index: number){
    this.showTrashButton = index;
  }

  onMouseLeave(){
    this.showTrashButton = null;
  }


  deleteTag(index: number) {
    this.gifsSearchService.deleteTag(index)
  }

  search(tag:string):void{

    this.gifsSearchService.searchTag(tag)
  }

}
