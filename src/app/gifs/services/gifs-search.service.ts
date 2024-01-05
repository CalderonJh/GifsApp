import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {GifRes, SearchResponse} from "../interfaces/gif-response.iterface";

@Injectable({
  providedIn: 'root'
})
export class GifsSearchService {

  public gifList: GifRes[] = [];
  private _tagsHistory: string[] = ['minecraft', 'test1', 'test2', 'test3', 'test4', 'test5'];

  private apiKey: string = '21aqhf3HVmXlcsN7Z0xtUGrJHYQgUCDp';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) { }

  get getTagsHistory():string[] {
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string):void{
    if (this._tagsHistory.includes(tag))
        this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 12);
  }


  searchTag(tag: string): void {
    // remove extra spaces and accents.
    tag = tag.trim().replace(/\s+/g, ' ').toLocaleLowerCase('en-US');

    if (tag.length > 0){
      this.organizeHistory(tag);
      const params: HttpParams = new HttpParams()
        .set('api_key', this.apiKey)
        .set('q', tag)
        .set('limit', 25);
      this.http
        .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
        .subscribe(res => {
          this.gifList = res.data;
        })
    }
  }


  deleteTag(index: number) {
    this._tagsHistory.splice(index, 1)
  }


  searchTrending():void{
    const params: HttpParams = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 25);
    this.http
      .get<SearchResponse>(`${this.serviceUrl}/trending`, { params })
      .subscribe(res => {
        this.gifList = res.data;
      })
  }

}
