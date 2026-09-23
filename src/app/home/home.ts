import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nosotros } from '../nosotros/nosotros';
import { Servicios } from '../servicios/servicios';
import { Maquinaria } from '../maquinaria/maquinaria';
import { Proyectos } from '../proyectos/proyectos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Nosotros, Servicios, Maquinaria, Proyectos],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
