import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-clients',
  templateUrl: './consult-clients.component.html',
  styleUrls: ['./consult-clients.component.scss']
})
export class ConsultClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
