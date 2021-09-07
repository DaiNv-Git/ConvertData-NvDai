import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  arrData = [{name:'String',to:'Base64'},{name:'Interge',to:'Base64'}]
  Base64 = [{name:'Base64',to:'String'},{name:'Base64',to:'Integer'}]
  showdata='';
  constructor() { }

  ngOnInit(): void {
  }

}
