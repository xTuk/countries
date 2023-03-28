import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnInit {
  @Input() legend = false;
  @Input() plugins = [];
  @Input() data: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{ data: [] }],
  };
  @Input() options: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  ngOnInit(): void {}
}
