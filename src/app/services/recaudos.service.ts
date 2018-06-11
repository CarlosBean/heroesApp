import { Injectable } from '@angular/core';

@Injectable()
export class RecaudosService {
  private data = {
    dataPunto: {
      empresa: ' OFICINA PRINCIPAL YUMBO - 12345',
      sucursal: 'RECAUDO',
      caja: 'CV1006071500'
    },
    dataRecaudos: [
      {
        proveedor: 'PROVEEDOR FRUTA 1',
        servicio: 'SERVICIO FRUTA 1',
        producto: 'PRODUCTO FRUTA 1',
        recaudos: [
          {
            ref: '150321654',
            fecha: '24/12/17',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '12000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '150000'
          },
          {
            ref: '230564189',
            fecha: '17/03/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '230000'
          }
        ]
      },
      {
        proveedor: 'PROVEEDOR FRUTA 2',
        servicio: 'SERVICIO FRUTA 2',
        producto: 'PRODUCTO FRUTA 2',
        recaudos: [
          {
            ref: '150321654',
            fecha: '24/12/17',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '72000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '230564189',
            fecha: '17/03/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '56000'
          }
        ]
      },
      {
        proveedor: 'PROVEEDOR FRUTA 3',
        servicio: 'SERVICIO FRUTA 3',
        producto: 'PRODUCTO FRUTA 3',
        recaudos: [
          {
            ref: '150321654',
            fecha: '24/12/17',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '72000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '230564189',
            fecha: '17/03/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '56000'
          }
        ]
      },
      {
        proveedor: 'PROVEEDOR FRUTA 4',
        servicio: 'SERVICIO FRUTA 4',
        producto: 'PRODUCTO FRUTA 4',
        recaudos: [
          {
            ref: '150321654',
            fecha: '24/12/17',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '72000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '230564189',
            fecha: '17/03/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '56000'
          }
        ]
      },
      {
        proveedor: 'PROVEEDOR FRUTA 5',
        servicio: 'SERVICIO FRUTA 5',
        producto: 'PRODUCTO FRUTA 5',
        recaudos: [
          {
            ref: '150321654',
            fecha: '24/12/17',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '72000'
          },
          {
            ref: '150321654',
            fecha: '24/12/17',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '72000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '230564189',
            fecha: '17/03/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '56000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          },
          {
            ref: '164987320',
            fecha: '12/01/18',
            formaPago: 'EFECTIVO',
            estado: 'RECAUDADO',
            valor: '210000'
          }
        ]
      }
    ]
  };

  constructor() {}

  getRecaudos() {
    return this.data.dataRecaudos;
  }

  getPunto() {
    return this.data.dataPunto;
  }
}
