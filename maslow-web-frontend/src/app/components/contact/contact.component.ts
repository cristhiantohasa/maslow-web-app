import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@ViewChild("nombre") nombre: any;
@ViewChild("correo") correo: any;
@ViewChild("proyectos") proyectos: any;
@ViewChild("financiamiento") financiamiento: any;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form:NgForm){
    localStorage.setItem("name", this.nombre.nativeElement.value)
    localStorage.setItem("correo", this.correo.nativeElement.value)
    localStorage.setItem("proyectos", this.proyectos.nativeElement.value)
    localStorage.setItem("financiamiento", this.financiamiento.nativeElement.value)

  }
}
