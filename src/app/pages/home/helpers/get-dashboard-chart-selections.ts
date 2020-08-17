import * as _ from 'lodash';

export function getDefaultOrganisationUnitSelections(userOrgnisationUnits) {
  return userOrgnisationUnits && userOrgnisationUnits.length > 0
    ? _.uniqBy(userOrgnisationUnits, 'id')
    : [];
}

export function getDefaultPeriodSelections(today?: Date) {
  const date = today ? new Date(today) : new Date();
  const monthIndex = date.getMonth();
  const currentYear = date.getFullYear();
  const id =
    monthIndex <= 2
      ? `${currentYear - 1}Q4`
      : monthIndex <= 5
      ? `${currentYear}Q1`
      : monthIndex <= 8
      ? `${currentYear}Q2`
      : `${currentYear}Q3`;
  return [{ id, type: 'Quarterly' }];
}
