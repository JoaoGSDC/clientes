import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeSidebar(): void {
    const modal = $('div.modal-sidebar');
    const sidebar = $('section.sidebar');
    const btnSidebar = $('a.btn-sidebar');

    sidebar.removeClass('sidebar-open');
    modal.removeClass('background-modal');
    btnSidebar.removeClass('btn-sidebar-open');
  }

  openSubMenu(iIndex: number) {
    const subMenu = document.getElementsByClassName('sub-open');
    subMenu[iIndex].classList.add('open-sub');
  }

  closeSubMenu(iIndex: number) {
    const subMenu = $('ul.sub-open');
    subMenu.removeClass('open-sub')[iIndex];
  }

}
