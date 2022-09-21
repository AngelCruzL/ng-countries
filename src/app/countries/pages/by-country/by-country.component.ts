import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  searchTerm: string = '';

  constructor(private countryService: CountryService) {}

  search() {
    this.countryService.searchCountry(this.searchTerm).subscribe((res) => {
      console.log(res);
    });
  }
}
