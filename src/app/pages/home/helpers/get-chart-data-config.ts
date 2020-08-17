export const DATA_CONFIG = [
  {
    name: '9-14',
    series: [
      {
        id: 'Vo2ZW4LC01Q',
        color: '#7F1542',
        name: 'Reached',
        type: 'column',
      },
      {
        id: 'dxOcABjDdir',
        color: '#02AED9',
        name: 'Target',
        type: 'column',
      },
      {
        id: 'aDLLRq8yBfa',
        color: '#A5A5A5',
        name: 'Reached Vs Target',
        type: 'spline',
      },
    ],
  },
  {
    name: '15-19',
    series: [
      {
        id: 'FKL2G09oo4n',
        color: '#7F1542',
        name: 'Reached',
        type: 'column',
      },
      {
        id: 'bIDZhM3OhBl',
        color: '#02AED9',
        name: 'Target',
        type: 'column',
      },
      {
        id: 'LZuNabo7rnG',
        color: '#A5A5A5',
        name: 'Reached Vs Target',
        type: 'spline',
      },
    ],
  },
  {
    name: '20-24',
    series: [
      {
        id: 'ezY5aFdgKOt',
        color: '#7F1542',
        name: 'Reached',
        type: 'column',
      },
      {
        id: 'uJoXpEsQKSM',
        color: '#02AED9',
        name: 'Target',
        type: 'column',
      },
      {
        id: 'PU3Nzk9eGPH',
        color: '#A5A5A5',
        name: 'Reached Vs Target',
        type: 'spline',
      },
    ],
  },
  {
    name: '25-19',
    series: [
      {
        id: 'dUJMIguliHv',
        color: '#7F1542',
        name: 'Reached',
        type: 'column',
      },
      {
        id: 'RZINkAqAMPX',
        color: '#02AED9',
        name: 'Target',
        type: 'column',
      },
      {
        id: 'i9CcAtcmHdJ',
        color: '#A5A5A5',
        name: 'Reached Vs Target',
        type: 'spline',
      },
    ],
  },
];

export const DEFAULT_CHART_OBJECT = {
  chart: {
    renderTo: 'chart-data',
  },
  title: {
    text: 'PP_PREV Performance by Age by Target - Quarterly',
  },
  xAxis: {
    categories: [],
  },
  yAxis: [
    {
      labels: {
        format: '{value} %',
      },
      title: {
        text: 'Percent reach',
      },
      opposite: true,
    },
    {
      gridLineWidth: 0,
      title: {
        text: 'Nummber of beneficiaries',
      },
      labels: {
        format: '{value}',
      },
      opposite: false,
    },
  ],
  tooltip: {
    shared: true,
  },
  series: [],
};
