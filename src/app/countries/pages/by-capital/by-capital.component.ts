import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(searchTerm: string) {
    this.hasError = false;
    this.searchTerm = searchTerm;

    this.countryService.searchCapital(this.searchTerm).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.hasError = true;
        this.countries = [];
      }
    );
  }
}
