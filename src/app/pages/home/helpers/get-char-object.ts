import * as _ from 'lodash';
import { DEFAULT_CHART_OBJECT, DATA_CONFIG } from './get-chart-data-config';

export function getChartObject(analytics: any) {
  const valueIndex = getIndexFromHeadersMetadata(
    analytics.headers || [],
    'value'
  );
  const dxIndex = getIndexFromHeadersMetadata(analytics.headers || [], 'dx');
  const rows = analytics.rows || [];
  let chartObject = DEFAULT_CHART_OBJECT;
  const categories = _.map(DATA_CONFIG, (config: any) => config.name);
  const series = [
    {
      name: 'Reached',
      type: 'column',
      color: '#7F1542',
      yAxis: 1,
      data: getSeriesDataByConfigIndex(0, rows, dxIndex, valueIndex),
    },
    {
      name: 'Target',
      type: 'column',
      color: '#02AED9',
      yAxis: 1,
      data: getSeriesDataByConfigIndex(1, rows, dxIndex, valueIndex),
    },
    {
      name: 'Reached Vs Target',
      type: 'spline',
      color: '#A5A5A5',
      data: getSeriesDataByConfigIndex(2, rows, dxIndex, valueIndex),
    },
  ];

  return {
    ...chartObject,
    xAxis: { ...chartObject.xAxis, categories },
    series,
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
    },
  };
}

function getSeriesDataByConfigIndex(
  index: number,
  rows: any,
  dxIndex: number,
  valueIndex: number
) {
  let data = [];
  const seriesConfigs = getSeriesConfigByIndex(DATA_CONFIG, index);
  if (seriesConfigs && seriesConfigs.length > 0) {
    data = _.map(seriesConfigs, (seriesConfig: any) => {
      const value = getRowValue(
        rows,
        dxIndex,
        valueIndex,
        seriesConfig.id || ''
      );
      return [value];
    });
  }
  return data;
}

function getSeriesConfigByIndex(DATA_CONFIG: any, index: number) {
  return _.flattenDeep(
    _.map(DATA_CONFIG, (config: any) => {
      const series = config.series || [];
      return series.length > index ? series[index] : [];
    })
  );
}

function getRowValue(
  rows: any,
  dxIndex: number,
  valueIndex: number,
  id: string
) {
  const selectedRow = _.filter(rows, (row: any) => {
    return row && row[dxIndex] && row[dxIndex] === id;
  });
  let value = 0;
  if (id !== '' && selectedRow.length > 0) {
    for (const data of selectedRow) {
      value += parseInt(data[valueIndex] || 0, 10);
    }
  }
  return value;
}

function getIndexFromHeadersMetadata(headers: any, value: string) {
  return _.findIndex(
    headers,
    (header: any) => header && header.name && header.name === value
  );
}
