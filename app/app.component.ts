import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Keeping Up with the Zoo Animals</h1>
      <h3>Trying to keep track of all the animals is tough, but fortunately a lot easier with this animal tracker application! Add and edit animals information on this site to keep the zoo in order.</h3>
      <br>
      <h2>List of animals: </h2>
      <br>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()">></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
    <br>
    <br>
  `
})

export class AppComponent {
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Giant Panda', 'Ralph', 3, 'Omnivore', 'Bear Exhibit', 3, 'Male', 'Bamboo and naps', 'Loud noises'),
    new Animal('Giraffe', 'Jolene', 1, 'Herbivore', 'Safari Exhibit', 2, 'Female', 'Being fed by zoo visitors', 'Loud noises'),
    new Animal('Hippopotamus', 'Helen', 5, 'Omnivore', 'Safari Exhibit', 1, 'Female', 'A good rare steak', 'Not a fan of people- use caution'),
    new Animal('Lion', 'Leo', 2, 'Carnivore', 'Safari Exhibit', 2, 'Male', 'Sun and napping in cave', 'Cold weather')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
