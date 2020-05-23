import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeSidebar(): void {
    const modal = $('div.modal-sidebar');
    const sidebar = $('section.sidebar');
    const btnSidebar = $('a.btn-sidebar');

    if (!sidebar.hasClass('sidebar-open')) {
      sidebar.addClass('sidebar-open');
    } else {
      sidebar.removeClass('sidebar-open');
    }

    if (!modal.hasClass('background-modal')) {
      modal.addClass('background-modal');
    } else {
      modal.removeClass('background-modal');
    }

    if (!btnSidebar.hasClass('btn-sidebar-open')) {
      btnSidebar.addClass('btn-sidebar-open');
    } else {
      btnSidebar.removeClass('btn-sidebar-open');
    }
  }

}
