export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: Currency[];
  demonym: string;
  flag: string;
  flags: Flags;
  gini: number;
  independent: boolean;
  languages: Language[];
  latlng: number[];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: RegionalBloc[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: Translations;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface Translations {
  br: string;
  de: string;
  es: string;
  fa: string;
  fr: string;
  hr: string;
  hu: string;
  it: string;
  ja: string;
  nl: string;
  pt: string;
}
