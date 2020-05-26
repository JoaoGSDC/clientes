import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/services/clients.service';
import { Clients } from 'src/app/interfaces/clients';

@Component({
  selector: 'app-consult-clients',
  templateUrl: './consult-clients.component.html',
  styleUrls: ['./consult-clients.component.scss']
})
export class ConsultClientsComponent implements OnInit {

  clients!: Clients[];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clients: Clients[]) => {
      this.clients = clients;
    });
  }

  searchClients(): void {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableClients");

    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  openConfirm(iClient: Clients): void {
    if (confirm('Deseja realmente excluir este cliente?')) {
      this.deleteGroup(iClient);
    }
  }

  storageGroup(iClient: Clients): void {
    localStorage.setItem('client', JSON.stringify(iClient));
  }

  deleteGroup(iClient: Clients): void {
    this.clientsService.delClient(iClient.cpf).subscribe(res => {
      alert('Deletado com sucesso!');

      this.clients.splice(this.clients.indexOf(iClient), 1);
    });
  }

}
