import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    employee: EmployeeDTO = {
      title: "blaa", 
      image: "https://fwcdn.pl/fph/91/90/9190/314652.2.jpg"
    }
}
