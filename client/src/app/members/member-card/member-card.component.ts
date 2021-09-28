import { Member } from './../../_models/member';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member = {
    id: 0,
    username: '',
    photoUrl: '',
    age: 0,
    knownAs: '',
    created: new Date(),
    lastActive: new Date(),
    gender: '',
    introduction: '',
    lookingFor: '',
    interests: '',
    city: '',
    country: '',
    photos: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
