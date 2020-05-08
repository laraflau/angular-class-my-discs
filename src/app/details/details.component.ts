import { Component, OnInit } from '@angular/core';
import { Disc, discs } from '../discs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  index;
  disc: Disc;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.index = params.get('index');
      this.disc = discs[this.index];
    });
  }
}
