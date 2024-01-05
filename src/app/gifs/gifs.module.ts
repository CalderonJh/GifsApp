import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { CardListComponent } from './components/card-list/card-list.component';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    SidebarComponent,
    MainPageComponent
  ],
  exports: [
    HomePageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
