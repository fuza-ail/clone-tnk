import { Component, OnInit, Input } from '@angular/core';
import {UserTesti} from '../../../../models/user-testi.model'

@Component({
  selector: 'app-testimony-card',
  templateUrl: './testimony-card.component.html',
  styleUrls: ['./testimony-card.component.scss']
})
export class TestimonyCardComponent implements OnInit {
  @Input() user:UserTesti;

  constructor() { }

  ngOnInit(): void {
  }

}
