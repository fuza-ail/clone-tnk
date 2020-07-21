import { Component, OnInit } from '@angular/core';
import {USER_TESTI} from '../../../data/user-testi';
import {UserTesti} from '../../../models/user-testi.model'

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  userTestimonies:UserTesti[]

  constructor() { }

  ngOnInit(): void {
    this.userTestimonies = USER_TESTI
  }

}
