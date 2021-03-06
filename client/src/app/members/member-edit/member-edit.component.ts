import { ToastrService } from 'ngx-toastr';
import { MembersService } from './../../_services/members.service';
import { AccountService } from './../../_services/account.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member!: Member;
  user!: User;

  @ViewChild('editForm') editForm!: NgForm;

  constructor(private accountService: AccountService, 
    private memberService: MembersService, private toastr: ToastrService) {
      this.accountService.currentUser$.pipe(take(1))
        .subscribe(user => {this.user = user});
   }

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember() {
    this.memberService.getMember(this.user.username).subscribe(member => 
      {this.member = member});
  }

  updateMember() {
    console.log('this.member :>> ', this.member);
    this.toastr.success('Profile updated successfully');
    this.editForm.reset(this.member);
  }

}
