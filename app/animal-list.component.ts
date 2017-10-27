import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Under 2 Years</option>
      <option value="adultAnimals">2 Years or Older</option>
      <option value="omnivores">Omnivores</option>
      <option value="herbivores">Herbivores</option>
      <option value="carnivores">Carnivores</option>
    </select>
    <br>
    <br>
      <div *ngFor="let currentAnimal of childAnimalList | animal:filterByAnimal">
        <div class="card col-md-5">
          <ul>
            <div class="emphasis">
              <p>Species: {{currentAnimal.species}}<br>
              Name: {{currentAnimal.name}}</p>
            </div>
            <li>Age: {{currentAnimal.age}}</li>
            <li>Diet: {{currentAnimal.diet}}</li>
            <li>Location: {{currentAnimal.location}}</li>
            <li>Caretakers Needed: {{currentAnimal.caretakers}}</li>
            <li>Sex: {{currentAnimal.sex}}</li>
            <li>Likes: {{currentAnimal.likes}}</li>
            <li>Dislikes: {{currentAnimal.dislikes}}</li>
            <br>
            <button class="btn btn-success" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
          </ul>
        </div>
        <br>
      </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAnimal: string = "allAnimals";


  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAnimal = optionFromMenu;
  }
}
