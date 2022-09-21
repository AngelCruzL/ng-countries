import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styles: [],
})
export class CountryDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.countryService.searchCountryByAlphaCode(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id))
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
