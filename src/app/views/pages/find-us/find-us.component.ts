import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.scss']
})
export class FindUsComponent implements OnInit {

  constructor() { }
  event_list = [
    {
      event:' Event 1',
      eventLocation:'موسم الدرعية',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'assets/slider/pic1.png',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
    {
      event:' Event 2',
      eventLocation:'مهرجان رجال الطيب',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'assets/slider/pic2.png',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
    {
      event:' Event 3',
      eventLocation:'مسك جدة التاريخية',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'assets/slider/pic3.png',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    }
  ]

  ngOnInit(): void {
  }

  // current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())));

}
