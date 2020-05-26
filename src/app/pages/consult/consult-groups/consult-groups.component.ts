import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/services/groups.service';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-consult-groups',
  templateUrl: './consult-groups.component.html',
  styleUrls: ['./consult-groups.component.scss']
})
export class ConsultGroupsComponent implements OnInit {

  groups!: Group[];

  constructor(private groupService: GroupsService) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((groups: Group[]) => {
      this.groups = groups;
    });
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

  openConfirm(iGroup: Group): void {
    if (confirm('Deseja realmente excluir este grupo?')) {
      this.deleteGroup(iGroup);
    }
  }

  storageGroup(iGroup: Group): void {
    localStorage.setItem('group', JSON.stringify(iGroup));
  }

  deleteGroup(iGroup: Group): void {
    this.groupService.delGroup(iGroup.id).subscribe(res => {
      alert('Deletado com sucesso!');

      this.groups.splice(this.groups.indexOf(iGroup), 1);
    });
  }

}
