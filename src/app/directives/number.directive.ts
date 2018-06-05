import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {
  private prefix = '$ ';
  private suffix = '.00';
  constructor(private el: ElementRef) {}

  public static parser(value: string): string {
    value = value.replace(/[^\d]+/g, '');
    return value.replace(/^0+(?=\d)/g, '');
  }

  public static transform(value: string): string {
    return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  @HostListener('input')
  onInput() {
    let value = NumberDirective.parser(this.el.nativeElement.value);
    value = NumberDirective.transform(value);
    this.el.nativeElement.value = this.prefix + value;
  }

  @HostListener('blur')
  onBlur() {
    let value = this.el.nativeElement.value;
    if (value === this.prefix) {
      value += '0.00';
    } else if (value !== '' && value.slice(-3) !== this.suffix) {
      value += this.suffix;
    }
    this.el.nativeElement.value = value;
  }

  @HostListener('focus')
  onFocus() {
    let value = this.el.nativeElement.value;
    if (value === '$ 0.00') {
      value = this.prefix;
    } else if (value.slice(-3) === this.suffix) {
      value = value.substring(0, value.length - 3);
    }
    this.el.nativeElement.value = value;
  }
}
