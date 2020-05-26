import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GroupsService } from 'src/services/groups.service';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss']
})
export class RegisterGroupComponent implements OnInit {

  form!: FormGroup;
  group!: Group;

  constructor(
    private formBuilder: FormBuilder,
    private groupService: GroupsService
  ) { }

  ngOnInit(): void {
    this.builderForm();

    if (localStorage.getItem('group')) {
      this.group = JSON.parse(localStorage.getItem('group'));
      this.setValue();
      localStorage.clear();
    }
  }

  onSubmit(): void {
    this.save();
  }

  save(): void {
    this.form.value.status = this.form.value.status === 'Ativo' ? "1" : "2";

    if (this.group) {
      this.group = this.form.value as Group;
      this.groupService.updateGroup(this.group).subscribe(res => {        
        if (res) {
          alert('Atualizado com sucesso!');
        } else {
          alert('Erro ao atualizar!');
        }
      });
    } else {
      this.groupService.postGroup(this.form.value).subscribe(res => {
        if (res) {
          this.form.reset();
          alert('Salvo com sucesso!');
        } else {
          alert('Erro ao salvar!');
        }
      });
    }
  }

  builderForm(): void {
    this.form = this.formBuilder.group({
      name: [null],
      status: [null]
    });
  }

  setValue() {
    this.form.setValue({
      name: this.group.name,
      status: this.group.status === "1" ? 'Ativo' : 'Desabilitado'
    });
  }

}
