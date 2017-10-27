import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "animal",
  pure: false
})

export class AnimalPipe implements PipeTransform {

  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    if(desiredAge === 'youngAnimals') {
      for(var i =0; i< input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      };
      return output
    } else if (desiredAge === 'adultAnimals') {
      for(var i =0; i< input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      };
      return output;
    } else {
    return input;
    }
  }


}
