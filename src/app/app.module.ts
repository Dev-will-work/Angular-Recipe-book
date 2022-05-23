import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MainComponent } from './main/main.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipeService } from './recipe.service';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    DemoComponent,
    MainComponent,
    ShoppingCartComponent,
    IngredientComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
