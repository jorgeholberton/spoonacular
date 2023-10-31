import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit 
{
 
  /* arreglo del tipo Modelo Recipe donde se encuentran los elementos de la receta */
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  /* contenido estático dentro del arreglo*/
recipes: Recipe[] = 
[
  new Recipe('Paella valenciana',
    'Recipe description',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/800px-01_Paella_Valenciana_original.jpg'),
  new Recipe('Pastel de chocolate',
    'Recipe description',
    'https://p1.pxfuel.com/preview/683/172/968/cake-sponge-cake-bowl-cake-small.jpg')
];
 
constructor() { }
 
ngOnInit() {
}
 
/* Variable de tipo Recipe */
onRecipeSelected(recipe: Recipe) 
{
  this.recipeWasSelected.emit(recipe);/* lista a emitir */
}
 
}
