import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  constructor() { 
    console.log('admin loaded')
  }

  ngOnInit(): void {
  }

}
