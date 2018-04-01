import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;


  // Propiedades de ENTRADA
  @Input('nombre') leyenda: string = 'Leyenda'; // Valor por defecto
  @Input() porcentaje: number = 50;     // Valor por defecto

  // Eventos (SALIDA)
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    console.log('Leyenda', this.leyenda);
    console.log('Porcentaje', this.porcentaje);
  }

  ngOnInit() {
  }

  cambiarValor (valor: number)
  {
    this.porcentaje = this.porcentaje + valor;
    
    if ( this.porcentaje < 0 ) 
      this.porcentaje = 0;
    else if ( this.porcentaje > 100 )
      this.porcentaje = 100;

    this.cambioValor.emit(this.porcentaje);  // Lanzamos evento

    this.txtPorcentaje.nativeElement.focus();
  }

  onChange(nuevoValor: number)
  {
    if (this.porcentaje == null || this.porcentaje < 0 ) 
      this.porcentaje = 0;
    else if ( this.porcentaje > 100 )
      this.porcentaje = 100;
    else
      this.porcentaje = nuevoValor;

    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);  // Lanzamos evento
  }

}
