import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'songs',
  },
  {
    path: 'songs',
    component: SongListComponent,
  },
  {
    path: 'songs/:id',
    component: SongComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
