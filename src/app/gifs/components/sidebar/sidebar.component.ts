import {Component, EventEmitter} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  showButton: number | null = null;

  constructor(
    private gifsService: GifsService) {}

  get getTags():string[]{
    return this.gifsService.getTagsHistory;
  }

  onMouseEnter(index: number){
    this.showButton = index;
  }

  onMouseLeave(){
    this.showButton = null;
  }


  deleteTag(index: number) {
    this.gifsService.deleteTag(index)
  }

  search(tag:string):void{
    this.gifsService.searchTag(tag)
    console.log(tag )
  }

}
