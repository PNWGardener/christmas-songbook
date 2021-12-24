import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Song } from '../core/models/song';
import { Songbook } from '../core/services/songbook.service';

@Component({
  selector: 'xmas-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SongListComponent implements OnInit {

  @Input()
  public songs: Song[] = []

  constructor(private songbook: Songbook) {

  }

  ngOnInit(): void {
    this.songs = this.songbook.getSongs()
    console.log(this.songs)
  }

}
