import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olaMundo';

  nome: string = 'Danilo'
  teste: string = 'Teste de nova variável'
}
