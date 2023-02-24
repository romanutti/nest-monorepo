import { Status } from '@angular-nestjs-monorepo/health/api';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealthStatus(): Status {
    return Status.OK;
  }
}
