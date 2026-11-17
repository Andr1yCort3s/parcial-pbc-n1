import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Tango egoista';
  artista = 'Rafscrap';
  motivo = 'Unico tango que me gusta.';
  enlace = 'https://youtu.be/SYKgmUqXTMM?si=zW0kpX52oILVfsbV';
}