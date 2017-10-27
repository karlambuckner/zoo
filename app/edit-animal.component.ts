import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.name}}</h3>
        <hr>
        <h3>Edit Animal Info</h3>
        <label>Edit Species:</label>
        <input [(ngModel)]="childSelectedAnimal.species">
        <label>Edit Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">
        <label>Edit Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age">
        <label>Edit Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet">
        <label>Edit Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location">
        <label>Edit Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers">
        <label>Edit Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex">
        <label>Edit Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes">
        <label>Edit Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes">
        <button class="btn btn-success"(click)="doneButtonClicked()">Done</button>
      </div>
    </div>
`
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
