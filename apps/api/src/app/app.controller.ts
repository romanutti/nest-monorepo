import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class AppController {
  constructor(private readonly service: HealthService) {}

  @Get()
  checkHealth() {
    const status = this.service.getHealthStatus();
    return { status: status };
  }
}
