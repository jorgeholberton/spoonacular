import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent 
{
  /* emiter para indicar el componenre seleccionado */
  @Output() navbarItemSelected = new EventEmitter<string>();
 
  onSelect(navBarItem: string) 
  {
    this.navbarItemSelected.emit(navBarItem);
  }
}

/* según lo selccionado en la barra de navegación, se pasara al appcomponent para que con
el elemento seleccionado muestre el component apropiado */