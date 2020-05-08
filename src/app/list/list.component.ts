import { Component, OnInit } from '@angular/core';

import { discs, Disc } from '../discs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  discs: Disc[];

  constructor() {}

  ngOnInit(): void {}
}
