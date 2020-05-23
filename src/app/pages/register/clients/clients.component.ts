import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  form!: FormGroup;

  inputDate!: string;
  openSelect = false;

  cpf = 'CPF';
  rg = 'RG';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setDate();

    this.builderForm();
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.salvar();
  }

  salvar(): void {
    alert('Salvo com sucesso');
  }

  builderForm(): void {
    this.form = this.formBuilder.group({
      name: [null],
      type: [null],
      cpf: [null],
      rg: [null],
      date: [null],
      group: [null],
      status: [null],
      tel: [null]
    });
  }

  setDate(): void {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    this.inputDate = `${day}/${(month + 1)}/${year}`;
  }

  typePerson(iType: any): void {
    if (iType === 'Física') {
      this.cpf = 'CPF';
      this.rg = 'RG';
    } else {
      this.cpf = 'CNPJ';
      this.rg = 'EI';
    }
  }

}
