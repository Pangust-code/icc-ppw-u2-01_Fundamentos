import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormularioBasicosPage } from '../../../../utils/FormularioBasicosPage';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './FormularioPage.html',
  styles: [
    `
    form {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
    },
    div {
      margin-bottom: 1rem;
      padding-top: 0.5rem;
    },
  `,
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulario {
  private fb = inject(FormBuilder);
  formUtils = FormularioBasicosPage

  // FORMULARIO CORRECTO
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: ['0', [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

  // SUBMIT
  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario', this.myForm.value);
    alert('Formulario enviado correctamente');
    this.myForm.reset();
  }
}
