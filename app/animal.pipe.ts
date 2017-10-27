import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "animal",
  pure: false
})

export class AnimalPipe implements PipeTransform {


  transform(input: Animal[], desiredAnimal) {
    var output: Animal[] = [];
    if(desiredAnimal === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAnimal === "adultAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
