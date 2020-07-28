import { Component } from '@angular/core';
import { LoanService } from './services/loan.service';
import {CustomerDetailService} from './services/customer-detail.service';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators'

declare var gtag;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LoanService,CustomerDetailService]
})
export class AppComponent {

  constructor( /*router:Router*/){
    // const navEndEvents = router.events.pipe(
    //   filter(event=> event instanceof NavigationEnd)
    // )
    // navEndEvents.subscribe((event:NavigationEnd)=>{
    //   gtag("config", "UA-173914111-1",{
    //     'page_path':event.urlAfterRedirects
    //   });
    // })
  }

}
