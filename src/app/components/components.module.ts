import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Componentes:
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule ({
    declarations: [
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports:[
        FormsModule,
        ChartsModule
    ]
})
export class ComponentsModule { }
