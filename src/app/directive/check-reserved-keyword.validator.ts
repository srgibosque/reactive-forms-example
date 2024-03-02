import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkInvalidKeyword(nameRe: RegExp): ValidatorFn{
  return (control: AbstractControl) : ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {invalidKeyWord: {value: control.value}} : null;
  };
}