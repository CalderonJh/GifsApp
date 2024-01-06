import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{


  @Input()
  public _url!: string;

  @Input()
  public _height!: string;

  @Input()
  public _width!: string;

  public _alt: string = 'a GIF, surely';

  ngOnInit(): void {
    if (!this._url) throw new Error('URL no provided')
    // console.log(this._height, this._width)
  }

}
