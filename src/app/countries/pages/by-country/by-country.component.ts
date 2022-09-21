import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(searchTerm: string) {
    this.hasError = false;
    this.searchTerm = searchTerm;

    this.countryService.searchCountry(this.searchTerm).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.hasError = true;
        this.countries = [];
      }
    );
  }

  suggestions(suggestionTerm: string) {
    this.hasError = false;
    // TODO: Create suggestions
  }
}
