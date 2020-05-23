import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <main>
    <div>
      <section id="main__content">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <img class="init-img" src="./assets/img/logo.png" />
        <router-outlet></router-outlet>
      </section>
    </div>
  </main>
`
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
