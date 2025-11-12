import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

// All HTTP requests will trigger the loading indicator by using this interceptor
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Show the loading indicator when a request starts
    this.loadingService.show();
    // Hide the loading indicator when the request completes
    return next.handle(request).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
