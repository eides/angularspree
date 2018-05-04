import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-product-list',
  templateUrl: './lp-product-list.component.html',
  styleUrls: ['./lp-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpProductListComponent implements OnInit {

  @Input() productsByTaxons;
  @Input() dealsType;
  
  constructor() {

  }

  ngOnInit() {
  }
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  moveLeft() { this.ds.moveLeft() }
  moveRight() { this.ds.moveRight() }
}
