import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  recipeInput = new FormControl();

  get recipes() {
    return this.recipeService.recipes;
  }

  onDelete(recipe: string) {
    this.recipeService.deleteRecipe(recipe);
  }

  addRecipe() {
    this.recipeService.addRecipe(this.recipeInput.value);
    this.recipeInput.setValue('');
  }

}
