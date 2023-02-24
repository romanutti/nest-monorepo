export interface HealthResponse {
  status: Status;
}

export enum Status {
  OK = 'healthy af',
  ERROR = 'struggling',
  SHUTTING_DOWN = 'shutting down',
}
