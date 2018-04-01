import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentajeAzul: number = 80;
  porcentajeVerde: number = 20;
    
  constructor() { }

  ngOnInit() {
  }

}
