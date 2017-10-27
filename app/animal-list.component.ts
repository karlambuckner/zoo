import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="youngAnimals">Under 2 Years</option>
      <option value="adultAnimals">Over 2 Years</option>
    </select>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | animal:filterByAnimal">{{currentAnimal.species}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}}
        <input *ngIf="currentAnimal.done === true" type="checkbox" checked (click)="toggleDone(currentAnimal, false)"/>
        <input *ngIf="currentAnimal.done === false" type="checkbox" (click)="toggleDone(currentAnimal, true)"/>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAnimal: string = "youngAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAnimal = optionFromMenu;
  }

  toggleDone(clickedAnimal: Animal, setAnimal: boolean) {
     clickedAnimal.done = setAnimal;
  }
}
