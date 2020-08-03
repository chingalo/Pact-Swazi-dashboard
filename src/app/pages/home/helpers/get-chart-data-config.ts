export const DATA_CONFIG = [
  {
    name: 'OVC HIV Status reported',
    series: [{ id: '', color: '#1177A5', name: 'OVC HIV status reported' }],
  },
  {
    name: 'Uknown',
    series: [
      { id: '', color: '#FDCB0B', name: 'At risk' },
      { id: '', color: '#D2A929', name: 'Not at Risk' },
      { id: '', color: '#ED7D31', name: 'Undisclosed' },
      { id: '', color: '#FCF6D4', name: 'Not screened' },
    ],
  },
  {
    name: 'HIV status type',
    series: [
      { id: '', color: '#E39824', name: 'Not on TX' },
      { id: '', color: '#E08725', name: 'On TX' },
      { id: '', color: '#ED7D31', name: 'HIV positive' },
      { id: '', color: '#1177A5', name: 'HIV Negative' },
    ],
  },
];

export const DEFAULT_CHART_OBJECT = {
  chart: {
    renderTo: 'chart-data',
    type: 'column',
  },
  title: {
    text: 'OVC_HIVSTAT',
  },
  xAxis: {
    categories: [],
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: 'gray',
      },
    },
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
      },
      dataSorting: {
        enabled: false,
      },
    },
  },
  series: [],
};
