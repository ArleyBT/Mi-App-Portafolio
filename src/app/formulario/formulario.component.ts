import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  motrarMensaje = false
  contacForm = new FormGroup({
    nombre: new FormControl("", [Validators.required,Validators.minLength(5)]),
    email: new FormControl("", [Validators.required,Validators.email])
  })

  get nombre(){
    return this.contacForm.get("nombre")?.value
  }

  get email(){
    return this.contacForm.get("email")?.value
  }

  enviar(){
    const estadoformulario =  this.contacForm.status
    console.log(estadoformulario, this.nombre, this.email)
    console.log(this.contacForm)
    if(this.contacForm.status=="INVALID"){

    this.motrarMensaje = true
    }
  }
}
