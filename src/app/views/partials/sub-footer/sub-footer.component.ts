import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent implements OnInit {
  msg; 
  constructor() { }

  ngOnInit(): void {
  }

  changeMsg(){
    this.msg = 'Thank you';
  }
}
