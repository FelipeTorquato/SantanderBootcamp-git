import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Felipe Camurça Torquato";
  text = "";

  pessoas = [
    {
      nome: "Felipe",
      sobrenome: "Camurça"
    },
    {
      nome: "Maria",
      sobrenome: "Silva"
    },
    {
      nome: "João",
      sobrenome: "Pereira"
    },
    {
      nome: "Márcio",
      sobrenome: "Santos"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: string) {
    console.log("Clicou em mim", nome);
  }
}
