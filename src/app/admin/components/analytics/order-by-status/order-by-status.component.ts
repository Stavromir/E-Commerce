import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-by-status',
  templateUrl: './order-by-status.component.html',
  styleUrl: './order-by-status.component.scss'
})
export class OrderByStatusComponent {

  @Input() analyticsData: any;

}
