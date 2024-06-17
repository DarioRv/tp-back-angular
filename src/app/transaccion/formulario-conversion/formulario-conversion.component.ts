import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequestStatus } from '../../shared/types/request-status.type';
import { ConvertRequest } from '../../interfaces/convert-request.interface';
import { ConversionDivisas } from '../../services/conversion-divisas.service';

@Component({
  selector: 'app-formulario-conversion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-conversion.component.html',
  styleUrl: './formulario-conversion.component.css',
})
export class FormularioConversionComponent {
  conversionForm: FormGroup = this.fb.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  status: RequestStatus = 'no status';
  resultadoConversion = 0;

  currencies = [
    {
      value: 'USD',
      label: 'Dólar estadounidense',
    },
    {
      value: 'EUR',
      label: 'Euro',
    },
    {
      value: 'JPY',
      label: 'Yen japonés',
    },
    {
      value: 'CAD',
      label: 'Dólar canadiense',
    },
    {
      value: 'BRL',
      label: 'Real brasileño',
    },
    {
      value: 'ARS',
      label: 'Peso argentino',
    },
    {
      value: 'COP',
      label: 'Peso colombiano',
    },
    {
      value: 'MXN',
      label: 'Peso mexicano',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private convesionDivisasService: ConversionDivisas
  ) {}

  get from(): FormControl {
    return this.conversionForm.get('from') as FormControl;
  }

  get to(): FormControl {
    return this.conversionForm.get('to') as FormControl;
  }

  get amount(): FormControl {
    return this.conversionForm.get('amount') as FormControl;
  }

  onSubmit(): void {
    if (this.conversionForm.invalid) {
      this.conversionForm.markAllAsTouched();
      return;
    }

    const conversion: ConvertRequest = this.conversionForm
      .value as ConvertRequest;

    this.convertir(conversion);
  }

  convertir(conversion: ConvertRequest): void {
    this.status = 'pending';
    this.convesionDivisasService.convert(conversion).subscribe({
      next: (response) => {
        this.status = 'success';
        this.resultadoConversion = response;
      },
      error: (error) => {
        this.status = 'error';
        console.error(error);
        this.resultadoConversion = 0;
      },
    });
  }
}
