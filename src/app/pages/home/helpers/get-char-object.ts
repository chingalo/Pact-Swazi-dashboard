import * as _ from 'lodash';
import { DEFAULT_CHART_OBJECT, DATA_CONFIG } from './get-chart-data-config';

export function getChartObject(analytics: any) {
  console.log({ analytics });
  let chartObject = DEFAULT_CHART_OBJECT;
  const categories = _.map(DATA_CONFIG, (config: any) => config.name);
  let count = -1;
  const series = _.flattenDeep(
    _.map(DATA_CONFIG, (config: any) => {
      count++;
      return _.map(config.series || [], (seriesConfig: any) => {
        const value = getRowValue(analytics, seriesConfig.id || '');
        const data = _.map(_.range(count), () => '');
        return {
          name: seriesConfig.name || '',
          color: seriesConfig.color || '',
          data: _.flattenDeep(_.concat(data, value)),
        };
      });
    })
  );
  return {
    ...chartObject,
    xAxis: { ...chartObject.xAxis, categories },
    series,
  };
}

function getRowValue(analytics: any, id: string) {
  return _.random(200, 1000);
}
