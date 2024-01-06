import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{


  @Input()
  public _url!: string;

  public _alt: string = 'a GIF, surely';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this._url) throw new Error('URL no provided')
  }

  onLoad(){
    this.hasLoaded = true;
  }

}
