import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  requestCount = 0;

  constructor(private spinnerService : NgxSpinnerService) { }

  loading(){
    this.requestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-climbing-dot',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#ffffff'
    })
  }

  idle() {
    this.requestCount--;
    if(this.requestCount <= 0){
      this.requestCount = 0;
      this.spinnerService.hide();
    }
  }
}
