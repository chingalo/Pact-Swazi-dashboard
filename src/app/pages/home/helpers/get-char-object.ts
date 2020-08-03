export const DEFAULT_CHART = {
  chart: {
    renderTo: 'chart-data',
    type: 'column',
  },
  title: {
    text: 'Stacked column chart',
  },
  xAxis: {
    categories: ['OVC HIV Status reported', 'Uknown', 'HIV status type'],
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
  series: [
    {
      name: 'OVC HIV status reported',
      color: '#4472C4',
      data: [44027],
    },
    {
      name: 'At risk',
      color: '#ED7D31',
      data: ['', 3516],
    },
    {
      name: 'Not at Risk',
      color: '#4472C4',
      data: ['', 5900],
    },
    {
      name: 'Not on TX',
      data: ['', '', ''],
    },
    {
      name: 'On TX',
      color: '#A5A5A5',
      data: ['', '', 1917],
    },
    {
      name: 'HIV positive',
      color: '#ED7D31',
      data: ['', '', 1925],
    },
    {
      name: 'HIV Negative',
      color: '#4472C4',
      data: ['', '', 37452],
    },
  ],
};
