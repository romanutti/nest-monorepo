import { HealthResponse } from '@angular-nestjs-monorepo/health/api';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HealthService } from './health.service';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'angular-nestjs-monorepo-root',
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Dummy component to show some backend interactions.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Ignore the huge template for now 😉
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    -->
    <style>
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
      #status {
        align-items: center;
        background-color: hsla(214, 62%, 21%, 1);
        border: none;
        box-sizing: border-box;
        color: rgba(55, 65, 81, 1);
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }
      #status .text-container {
        color: rgba(255, 255, 255, 1);
        padding: 3rem 2rem;
      }
      #status .text-container h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        position: relative;
      }
      #status .text-container h2 svg {
        color: hsla(162, 47%, 50%, 1);
        height: 2rem;
        left: -0.25rem;
        position: absolute;
        top: 0;
        width: 2rem;
      }
      #status .text-container h2 span {
        margin-left: 2.5rem;
      }
      #status .text-container a {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 0.75rem;
        color: rgba(55, 65, 81, 1);
        display: inline-block;
        margin-top: 1.5rem;
        padding: 1rem 2rem;
        text-decoration: inherit;
      }
      #status .logo-container {
        display: none;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      #status .logo-container svg {
        color: rgba(255, 255, 255, 1);
        width: 66.666667%;
      }

      #love {
        color: rgba(107, 114, 128, 1);
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 3.5rem;
        opacity: 0.6;
        text-align: center;
      }
      #love svg {
        color: rgba(252, 165, 165, 1);
        width: 1.25rem;
        height: 1.25rem;
        display: inline;
        margin-top: -0.25rem;
      }

      @media screen and (min-width: 768px) {
        #status {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #status .logo-container {
          display: flex;
        }
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <div id="welcome">
          <h1>
            <span> Nest monorepo </span>
            Welcome stranger 👋
          </h1>
        </div>

        <div id="status" class="rounded">
          <div class="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>Your backend is {{ getMessage() | async }}...</span>
            </h2>
            <a href="https://github.com/romanutti/nest-monorepo">
              View sources
            </a>
          </div>
          <div class="logo-container">
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"
              />
            </svg>
          </div>
        </div>
        <p id="love">
          Carefully crafted with Angular, Nest.js and
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  `,
})
export class AppComponent {
  health$: Observable<HealthResponse>;

  constructor(protected service: HealthService) {
    this.health$ = service.checkHealth();
  }

  getMessage(): Observable<string> {
    return this.health$.pipe(
      map((res) => {
        return res.status;
      })
    );
  }
}
