import { RecaudosService } from '../services/recaudos.service';
import { CurrencyPipe } from '@angular/common';

export class ReportePdf {
  private docDefinition: any;
  private total = 0;
  private layout = {
    hLineWidth: (i, node) => (i === node.table.body.length - 1 ? 0.5 : 0),
    vLineWidth: (i, node) => 0,
    hLineColor: (i, node) => 'gray',
    fillColor: (i, node) => (i === 0 ? '#dddddd' : null)
  };
  private styles = {
    header: {
      fontSize: 15,
      margin: [0, 0, 0, 0]
    },
    text: {
      fontSize: 12,
      margin: [0, 0, 0, 15]
    },
    tableBody: {
      fontSize: 10,
      margin: [0, 0, 0, 10]
    }
  };

  currencyPipe: any;

  constructor(recaudosService: RecaudosService) {
    this.currencyPipe = new CurrencyPipe('en-US');
    this.docDefinition = {
      footer: (currentPage, pageCount) => {
        return {
          text: currentPage.toString() + ' de ' + pageCount,
          alignment: 'center'
        };
      },
      header: {
        margin: [40, 10, 0, 0],
        columns: [
          /* {
            image: imagen base64,
            width: 35
          }, */
          { margin: [0, 5, 0, 0], text: 'COCO RECAUDOS', italics: true }
        ]
      },
      content: [
        { text: 'REPORTE DE RECAUDOS', style: 'header', alignment: 'center' },
        { text: 'Fecha: 20/12/18', style: 'tableBody', alignment: 'center' },
        {
          style: 'text',
          text: [
            [
              { text: 'Empresa: ', bold: true },
              { text: 'OFICINA PRINCIPAL YUMBO - 12345\n' }
            ],
            [{ text: 'Sucursal: ', bold: true }, { text: 'RECAUDO\n' }],
            [{ text: 'Caja: ', bold: true }, { text: 'CV1006071500\n' }]
          ]
        },
        this.generarTablas(recaudosService.getRecaudos()),
        {
          style: 'tableHeader',
          table: {
            widths: ['*', 95, 100],
            body: [
              [
                {},
                { text: 'TOTAL' },
                {
                  text: this.currencyPipe.transform(this.total, '', 'symbol'),
                  alignment: 'right'
                }
              ]
            ]
          },
          layout: 'noBorders'
        }
      ],
      styles: this.styles
    };
  }

  buildTableBody(data) {
    // tslint:disable-next-line:prefer-const
    let body = [];
    let subtotal = 0;

    body.push([
      { text: 'N. Referencia', bold: true },
      { text: 'Fecha', bold: true },
      { text: 'Forma Pago', bold: true },
      { text: 'Estado', bold: true },
      { text: 'Valor', bold: true, alignment: 'right' }
    ]); // Headers

    data.forEach(row => {
      // tslint:disable-next-line:prefer-const
      let dataRow = [];

      // tslint:disable-next-line:forin
      for (const column in row) {
        // tslint:disable-next-line:prefer-const
        let value = row[column].toString();
        if (column === 'valor') {
          subtotal += parseInt(value, 0);
          dataRow.push({
            text: this.currencyPipe.transform(value, '', 'symbol'),
            alignment: 'right'
          });
        } else {
          dataRow.push({ text: value });
        }
      }

      body.push(dataRow);
    });

    body.push([
      { text: '', colSpan: 3 },
      {},
      {},
      {
        text: 'Subtotal',
        bold: true,
        fillColor: '#dddddd'
      },
      {
        text: this.currencyPipe.transform(subtotal, '', 'symbol'),
        bold: true,
        alignment: 'right'
      }
    ]);

    this.total += subtotal;
    return body;
  }

  generarTablas(data) {
    // tslint:disable-next-line:prefer-const
    let tablas = [];
    data.forEach(recaudo => {
      tablas.push(
        {
          fillColor: '#f4f4f4',
          fontSize: 10,
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: [
                    { text: 'Proveedor: ', bold: true },
                    { text: recaudo.proveedor }
                  ]
                },
                {
                  text: [
                    { text: 'Servicio: ', bold: true },
                    { text: recaudo.servicio }
                  ]
                }
              ],
              [
                {
                  colSpan: 2,
                  text: [
                    { text: 'Producto: ', bold: true },
                    { text: recaudo.producto }
                  ]
                },
                {}
              ]
            ]
          },
          layout: 'noBorders'
        },
        {
          style: 'tableBody',
          table: {
            widths: ['*', '*', '*', '*', '*'],
            headerRows: 1,
            body: this.buildTableBody(recaudo.recaudos)
          },
          layout: this.layout
        }
      );
    });

    console.log(tablas);
    return tablas;
  }

  getDocDefinition() {
    return this.docDefinition;
  }
}
