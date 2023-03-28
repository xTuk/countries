import { ChartConfiguration } from 'chart.js';
export interface ChartsData {
  populations: ChartInfoPie;
  regions: ChartConfiguration<'bar'>['data'];
  languages: ChartInfoPie;
}

export interface ChartInfoPie {
  data: [
    {
      data: number[];
      backgroundColor: string[];
    }
  ];
  labels: string[];
  label?: string;
}
