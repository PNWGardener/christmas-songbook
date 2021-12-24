import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../core/models/song';
import { Songbook } from '../core/services/songbook.service';

@Component({
  selector: 'xmas-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input()
  song?: Song

  constructor(private songbook: Songbook, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var songId = this.route.snapshot.params['id']

    this.song = this.songbook.getSong(songId)
  }

}
