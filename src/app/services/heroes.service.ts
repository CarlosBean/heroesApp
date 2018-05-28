import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroesService {

  heroesUrl = 'https://heroesapp-eee88.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-eee88.firebaseio.com/heroes/';

  constructor(private http: HttpClient) { }

  crearHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'ContentType': 'application/json'
    });

    return this.http.post(this.heroesUrl, body, { headers })
      .pipe(map(res => {
        console.log('RESPONSE SERVICE', res);
        return res;
      }));
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'ContentType': 'application/json'
    });

    const url = `${this.heroeUrl}/${key$}.json`;

    return this.http.put(url, body, { headers })
      .pipe(map(res => {
        console.log('RESPONSE SERVICE', res);
        return res;
      }));
  }
  obtenerHeroe(key$: string) {

    const url = `${this.heroeUrl}/${key$}.json`;

    return this.http.get(url)
      .pipe(map(res => {
        console.log('RESPONSE SERVICE', res);
        return res;
      }));
  }

  obtenerHeroes() {
    return this.http.get(this.heroesUrl)
      .pipe(map(res => {
        console.log('RESPONSE SERVICE', res);
        return res;
      }));
  }

  eliminarHeroe(key$: string) {
    const url = `${this.heroeUrl}/${key$}.json`;

    return this.http.delete(url)
      .pipe(map(res => {
        console.log('RESPONSE SERVICE', res);
        return res;
      }));
  }
}
