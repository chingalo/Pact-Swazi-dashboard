import { BaseState, initialBaseState } from './base.state';

export interface DashboardDataState extends BaseState {
  analytics: any;
}

export const initialDashboardDataState: DashboardDataState = {
  ...initialBaseState,
  analytics: null,
};
