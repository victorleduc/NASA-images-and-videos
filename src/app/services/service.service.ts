import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SearchResult } from '../model/SearchResult';
import { DetailAsset } from '../model/DetailAsset';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getPictures(searchWord: string) {
    return this.http.get<SearchResult>('https://images-api.nasa.gov/search?q=' + searchWord);
  }
  getPicture(code: string) {
    return this.http.get<DetailAsset>('https://images-api.nasa.gov/asset/' + code);
  }
}
