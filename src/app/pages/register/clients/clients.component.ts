import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ClientsService } from 'src/services/clients.service';
import { Clients } from 'src/app/interfaces/clients';
import { Phone } from 'src/app/interfaces/phone';
import { Group } from 'src/app/interfaces/group';
import { GroupsService } from 'src/services/groups.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  form!: FormGroup;
  client!: Clients;
  phoneNumbers: Phone[] = [];
  groups!: Group[];
  group!: Group;

  openSelect = false;

  cpf = 'CPF';
  rg = 'RG';

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private groupService: GroupsService
  ) { }

  ngOnInit(): void {
    this.builderForm();

    this.setGroups();

    if (localStorage.getItem('client')) {
      this.client = JSON.parse(localStorage.getItem('client'));

      this.groupService.getGroup(this.client.id_group).subscribe((group: Group) => {
        this.group = group;
        
        this.setValue();
      });

      localStorage.clear();
    } else {
      this.form.controls['date'].setValue(this.setDate());
    }    
  }

  onSubmit(): void {
    this.save();
  }

  save(): void {
    this.form.value.status = this.form.value.status === 'Ativo' ? "1" : "2";

    if (this.client) {
      this.client = this.form.value as Clients;
      this.clientService.updateClient(this.client).subscribe(res => {
        if (res) {
          alert('Atualizado com sucesso!');
        } else {
          alert('Erro ao atualizar!');
        }
      });
    } else {
      this.client = this.form.value as Clients;
      this.client.tel = this.phoneNumbers;
      this.client.id_group = Number(this.client.group);

      this.clientService.postClient(this.client).subscribe(res => {
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
      type: [null],
      cpf: [null],
      rg: [null],
      date: [null],
      group: [null],
      status: [null],
      tel: [null]
    });
  }

  buildPhones(): FormArray {
    const value = this.phoneNumbers.map(v => new FormControl(false));
    return this.formBuilder.array(value);
  }

  setValue() {
    this.form.setValue({
      name: this.client.name,
      type: this.client.type,
      cpf: this.client.cpf,
      rg: this.client.rg,
      date: this.client.date,
      group: null,
      status: this.client.status,
      tel: null
    });
  }

  setGroups(): void {
    this.groupService.getGroups().subscribe((groups: Group[]) => {
      this.groups = groups;
    });
  }

  addPhoneNumber(iPhoneNumber: string): void {
    const phone: Phone = {
      tel: iPhoneNumber,
      cpf_client: this.form.value.cpf
    }
    this.phoneNumbers.push(phone);
  }

  removePhoneNumber(iPhoneNumber: string): void {
    const phone: Phone = {
      tel: iPhoneNumber,
      cpf_client: this.form.value.cpf
    }
    this.phoneNumbers.splice(this.phoneNumbers.indexOf(phone), 1);
  }

  setDate(): string {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}/${(month + 1)}/${year}`;
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
