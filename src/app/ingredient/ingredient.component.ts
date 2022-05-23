import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() recipe: string = '';

  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }
}
