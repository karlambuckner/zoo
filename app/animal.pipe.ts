import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "animal",
  pure: false
})

export class AnimalPipe implements PipeTransform {

  transform(input: Animal[], desiredAgeDiet) {
    var output: Animal[] = [];
    if(desiredAgeDiet === 'youngAnimals') {
      for(var i =0; i< input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAgeDiet === 'adultAnimals') {
      for(var i =0; i< input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAgeDiet === 'omnivores') {
      for(var i =0; i< input.length; i++) {
        if (input[i].diet === 'Omnivore') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAgeDiet === 'herbivores') {
      for(var i =0; i< input.length; i++) {
        if (input[i].diet === 'Herbivore') {
          output.push(input[i]);
        }
      };
      return output;
    } else if (desiredAgeDiet === 'carnivores') {
      for(var i =0; i< input.length; i++) {
        if (input[i].diet === 'Carnivore') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
