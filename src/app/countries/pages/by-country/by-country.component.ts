import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(searchTerm: string) {
    this.hasError = false;
    this.searchTerm = searchTerm;
    this.showSuggestions = false;

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
    this.searchTerm = suggestionTerm;
    this.showSuggestions = true;

    this.countryService.searchCountry(suggestionTerm).subscribe({
      next: (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      error: (err) => (this.suggestedCountries = []),
    });
  }
}
