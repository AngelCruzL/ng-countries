import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: [],
})
export class CountriesInputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  searchTerm: string = '';

  constructor() {}

  search() {
    this.onEnter.emit(this.searchTerm);
  }
}
