import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  searchTerm: string = '';
  hasError: boolean = false;

  constructor(private countryService: CountryService) {}

  search() {
    this.hasError = false;

    this.countryService.searchCountry(this.searchTerm).subscribe(
      (countries) => {
        console.log(countries);
      },
      (err) => {
        this.hasError = true;
      }
    );
  }
}
