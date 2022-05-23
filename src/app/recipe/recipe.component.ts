import {Component} from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

    constructor(
        private readonly recipeService: RecipeService
      ) { }

    addRecipe(event: any) {
        const ingredient_name: string = event.target.closest('li').children[0].innerText;
        alert(`Ingredient ${ingredient_name} added to shopping cart`);
        this.recipeService.addRecipe(ingredient_name);
    }  

}
