import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './Card';

@Injectable()
export class ApiService {

  public getCardData(): Observable {
    let dummyCards : Card[] = [
        {iccid: '123456', euicc: '8909323', msisdn: '274824', status_paket_data: '100', status_sms: '100', active_profile: 'Profile_1'},
    ];

    return Observable.of(dummyCards).delay(500);
  }
}
