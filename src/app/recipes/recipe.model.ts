
export class Recipe 
{
  public name: string;
  public description: string;
  public imagePath: string;
  /* public ingredients: Ingredient[]; */ // arreglo de ingredientes, debe ir en shopping-list

  constructor(name: string, desc: string, imagePath: string, /* ingredients: Ingredient[] */) 
  {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    /* this.ingredients = ingredients; */
  }
}

/* Estos elementos seran cargados en el arreglo recipe del recipe-list.component.ts */