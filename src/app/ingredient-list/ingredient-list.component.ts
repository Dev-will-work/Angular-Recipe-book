import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() data: string[] = [];

  constructor(private readonly recipeService: RecipeService) { 
  }

  ngOnInit(): void {
  }

  addRecipe(event: any) {
    const ingredient_name: string = event.target.closest('li').children[0].innerText;
    alert(`Ingredient ${ingredient_name} added to shopping cart`);
    this.recipeService.addRecipe(ingredient_name);
  }  

}
