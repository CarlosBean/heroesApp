import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regex'
})
export class RegexPipe implements PipeTransform {
  transform(texto: any, patron: string): any {
    const LETRAS = /[a-zA-ZñÑ]/;
    const NUMEROS = /\d/;
    const ALPHANUM = /[a-z0-9]/;

    let idx: number;

    if (texto !== '') {
      switch (patron) {
        case 'letras':
          idx = texto.search(LETRAS);
          break;
        case 'numeros':
          idx = texto.search(LETRAS);
          break;
        case 'alphanum':
          idx = texto.search(LETRAS);
          break;
      }

      const log = `Indice ${idx} -- Entrada ${texto} -- Salida ${texto.slice(
        -1
      )}`;
      console.log(log);
      return idx !== -1 ? texto : texto.slice(0, -1);
    }
    return null;
  }
}
