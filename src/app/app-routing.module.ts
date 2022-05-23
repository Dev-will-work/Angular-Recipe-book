import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { MainComponent } from './main/main.component';
import {RecipeComponent} from "./recipe/recipe.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
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
