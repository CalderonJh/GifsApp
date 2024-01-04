import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = ['test1', 'test2'];
  constructor() { }

  get getTagsHistory():string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string):void{
    if (this._tagsHistory.includes(tag))
        this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    // remove extra spaces and accents.
    tag = tag.trim().replace(/\s+/g, ' ').toLocaleLowerCase('en-US');
    if (tag.length > 0) this.organizeHistory(tag);

    console.log(this._tagsHistory)
  }

}
