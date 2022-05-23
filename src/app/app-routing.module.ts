import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { MainComponent } from './main/main.component';
import {RecipeComponent} from "./recipe/recipe.component";
import { Recipe2Component } from './recipe2/recipe2.component';
import { Recipe3Component } from './recipe3/recipe3.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
  },
  {
    path: 'recipe2',
    component: Recipe2Component,
  },
  {
    path: 'recipe3',
    component: Recipe3Component,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: ':main',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
