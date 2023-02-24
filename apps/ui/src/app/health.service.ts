import { HealthResponse, Status } from '@angular-nestjs-monorepo/health/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HealthService {
  private health$ = new BehaviorSubject<HealthResponse>({
    status: Status.OK,
  });

  public checkHealth(): Observable<HealthResponse> {
    return this.health$.asObservable();
  }
}
