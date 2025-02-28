import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatGridListModule]
})
export class AppComponent {
  input: string = '';

  pressKey(value: string) {
    if (value === '=') {
      try {
        this.input = new Function('return ' + this.input)(); // Alternativa mais segura ao eval()
      } catch {
        this.input = 'Erro';
      }
    } else if (value === 'Calcular') {
      this.input = '';
    } else {
      this.input += value;
    }
  }
}
