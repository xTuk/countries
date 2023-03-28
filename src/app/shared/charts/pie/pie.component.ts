import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChartOptions, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieComponent implements OnInit {

  @Input() options: ChartOptions = { responsive: true };
  @Input() labels: string[] = [];
  @Input() data: ChartDataset<"pie", number[]>[] = [{  data: [] }];
  @Input() plugins = [];
  @Input() legend = false;

  ngOnInit() {

  }


}
