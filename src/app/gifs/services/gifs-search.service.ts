import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {GifRes, SearchResponse} from "../interfaces/gif-response.iterface";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class GifsSearchService {

  public gifList: GifRes[] = [];
  private _tagsHistory: string[] = [];

  private apiKey: string = '21aqhf3HVmXlcsN7Z0xtUGrJHYQgUCDp';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient,
              private lsService:LocalStorageService) { }

  get getTagsHistory():string[] {
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string):void{
    if (this._tagsHistory.includes(tag))
        this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 12);
    this.lsService.saveHistoryToLocalStorage(this.getTagsHistory);
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
    this.lsService.saveHistoryToLocalStorage(this.getTagsHistory);
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

  onAppInit():void{
    this._tagsHistory = this.lsService.loadFromLocalStorage()
    this.searchTrending();
  }

}
