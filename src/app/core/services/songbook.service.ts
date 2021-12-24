import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, throwError } from 'rxjs';
import { Song } from '../models/song';
import { songs } from './songbook.songs';
@Injectable({
  providedIn: 'root'
})
export class Songbook {
  public songs: Song[] = songs
  constructor(private httpClient: HttpClient) {

  }

  getSongs() {
    return this.songs.sort((a, b) => a.title < b.title ? 1 : -1)
  }

  getSong(id: string) {
    return this.songs.find(song => song.id === id);
  }

  search(searchText: string) {
    return this.songs.filter(song => song.title.toLowerCase().indexOf(searchText) >= 0).sort()
  }
}
