import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss']
})
export class RegisterGroupComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
      status: [null]
    });
  }

}
