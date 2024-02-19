import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time24'
})
export class Time24Pipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const timeParts = value.split(':');
    const hours = +timeParts[0];
    const minutes = +timeParts[1];

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}
