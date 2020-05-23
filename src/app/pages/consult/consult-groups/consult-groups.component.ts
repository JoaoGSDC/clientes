import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-groups',
  templateUrl: './consult-groups.component.html',
  styleUrls: ['./consult-groups.component.scss']
})
export class ConsultGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchGroup(): void {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableGroup");

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

  openConfirm(): void {
    if (confirm('Deseja realmente excluir este grupo?')) {
      this.deleteGroup();
    }
  }

  deleteGroup(): void {
    console.log('Em construção');
  }

}
