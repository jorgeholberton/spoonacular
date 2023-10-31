import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit 
{
 /* arreglo de ingredientes estáticos a mostrar */
  ingredients: Ingredient[] = 
  [
    new Ingredient('bananas', 3),
    new Ingredient('strawberries', 10)
  ];
 
  constructor() { }
 
  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
  }
}

/* Al método onIngredientAdded(). Le pasamos un argumento, que será un ingrediente de tipo Ingredient. 
Para añadir un nuevo ingrediente, simplemente utilizamos el método push, que añadirá 
el ingrediente al array ingredients. */