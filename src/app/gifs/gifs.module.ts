import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";

import {CardListComponent} from './components/card-list/card-list.component';
import {GifCardComponent} from "./components/gif-card/gif-card.component";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LocalStorageService} from "./services/local-storage.service";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";


@NgModule({
  declarations: [
    CardListComponent,
    GifCardComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  exports: [
    HomePageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    LocalStorageService
  ]
})
export class GifsModule { }
