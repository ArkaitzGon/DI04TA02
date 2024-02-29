import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

/**
 * Cargamos los componentes que hemos creado, en este modulo
 * Para asi poder usarlos y exportarlos
 */
@NgModule({
  declarations: [
    BarChartComponent, 
    LineChartComponent, 
    PieChartComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BarChartComponent, 
    LineChartComponent, 
    PieChartComponent
  ]
})
export class ComponentsModule { }
