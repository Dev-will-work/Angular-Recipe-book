import {Injectable} from "@angular/core";

@Injectable()
export class RecipeService {
  private _recipes: string[] = Object.values(JSON.parse(window.localStorage.getItem('data') ?? "{}"));


  get recipes() {
    return [...this._recipes];
  }

  addRecipe(title: string) {
    this._recipes = [...this._recipes, title];
    window.localStorage.setItem('data', JSON.stringify(this._recipes));
  }

  deleteRecipe(recipe: string) {
    const index = this.recipes.indexOf(recipe);

    if (index === -1) {
      return;
    }

    this._recipes = [...this.recipes.slice(0, index), ...this.recipes.slice(index+1)];
    window.localStorage.setItem('data', JSON.stringify(this._recipes));
  }
}
