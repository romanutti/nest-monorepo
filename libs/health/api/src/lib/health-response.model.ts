export interface HealthResponse {
  status: Status;
}

export enum Status {
  OK = 'ok',
  ERROR = 'error',
  SHUTTING_DOWN = 'shutting_down',
}
