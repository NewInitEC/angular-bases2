import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public character: Character ={
    name:'pruebilla',
    power:5550
  }

  public mostrarCaracter():void{
    console.log(this.character);
  }
}
