import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import {Observable} from 'rxjs';

@Component({ selector: 'lib-employee-details-page', templateUrl: './employee-details.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailsPage {
name;
sub : any;
constructor (private route: ActivatedRoute){}
private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log(this.name)
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}