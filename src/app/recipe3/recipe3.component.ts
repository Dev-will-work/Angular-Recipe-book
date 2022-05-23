import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe3',
  templateUrl: './recipe3.component.html',
  styleUrls: ['./recipe3.component.css']
})
export class Recipe3Component {

  constructor(
    private readonly recipeService: RecipeService
  ) { }

addRecipe(event: any) {
    const ingredient_name: string = event.target.closest('li').children[0].innerText;
    alert(`Ingredient ${ingredient_name} added to shopping cart`);
    this.recipeService.addRecipe(ingredient_name);
}  

}
