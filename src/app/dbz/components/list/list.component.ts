import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()//para enviar propiedad de padre a hijo
  public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }]
}
