import { HealthResponse, Status } from '@angular-nestjs-monorepo/health/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const API_URL = 'http://localhost:3333/api';

@Injectable({ providedIn: 'root' })
export class HealthService {
  private health$ = new BehaviorSubject<HealthResponse>({
    status: Status.ERROR,
  });

  constructor(private httpClient: HttpClient) {}

  get status(): Observable<HealthResponse> {
    return this.health$.asObservable();
  }

  checkStatus() {
    this.httpClient
      .get<HealthResponse>(API_URL)
      .subscribe((res) => this.health$.next(res));
  }
}
