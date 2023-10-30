import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})

export class RecipeItemComponent 
{
	/* @Input decorador para poder obtener el valor desde afuera */
  @Input()
  recipe!: Recipe;/* No se le asigna valor pues se obtiene desde el parentcomponent, con ! se evita
                  que se marque como error si no tiene un valor definido */
}
