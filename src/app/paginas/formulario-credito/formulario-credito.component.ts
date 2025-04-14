import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreditoService } from '../../services/credito.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-credito',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-credito.component.html',
  styleUrl: './formulario-credito.component.css'
})
export class FormularioCreditoComponent implements OnInit{
  creditoForm!: FormGroup
  
constructor(private creditoService: CreditoService){}
  ngOnInit(){
    this.inicializarFormulario();
  }
  
  inicializarFormulario(){
    
    this.creditoForm = new FormGroup({
      numeroCredito: new FormControl(''),
      numeroNfse: new FormControl(''),
      dataConstituicao: new FormControl(''),
      valorIssqn: new FormControl(''),
      tipoCredito: new FormControl(''),
      simplesNacional: new FormControl(''),
      aliquota: new FormControl(''),
      valorFaturado: new FormControl(''),
      valorDeducao: new FormControl(''),
      baseCalculo: new FormControl('')
      
    })
  }
  salvarCredito(){
    if(this.creditoForm.valid){
      console.log(this.creditoForm.value);
    }else{
      alert("preencha os campos obrigatórios!")
    }

  } 

}
