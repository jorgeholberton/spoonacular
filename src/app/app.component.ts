import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'spoonacular';
  loadedNavbarItem = 'recipes';
 
onNavigate(navItem: string) 
{
  this.loadedNavbarItem = navItem;
}
}
