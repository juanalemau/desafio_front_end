import { Component, OnInit, Input } from '@angular/core';

export type dltColor = 'default' | 'primary' | 'secondary';

@Component({
  selector: 'app-dlt-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() image: any;
  @Input() title: any;
  @Input() number: any;
  @Input() color: dltColor = 'default';

  constructor() {}

  ngOnInit() {}
}
