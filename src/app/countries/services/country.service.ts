import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  #apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  get httpParams(): HttpParams {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.#apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.#apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCountryByAlphaCode(id: string): Observable<Country> {
    const url = `${this.#apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchCountriesByRegion(region: string): Observable<Country[]> {
    const url = `${this.#apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
