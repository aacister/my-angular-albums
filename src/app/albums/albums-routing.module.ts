import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: AlbumListComponent },
  {path: ":id", component: AlbumDetailsComponent},
  ];

@NgModule({
  declarations: [],

  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
