import {Component} from '@angular/core';
import {GifsService} from "../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  showTrashButton: boolean = false;

  constructor(private gifsService: GifsService) {}

  get getTags():string[]{
    return this.gifsService.getTagsHistory;
  }

  onMouseEnter(evt: any){
    console.log(evt.target.textContent)
    this.showTrashButton = true;
  }

  onMouseLeave(){
    this.showTrashButton = false
  }



}
