import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-family-register',
  templateUrl: './family-register.component.html',
  styleUrls: ['./family-register.component.scss']
})
export class FamilyRegisterComponent implements OnInit {


  family_info: any = null;
  add_member: any = {};
  submitted = false;
  count = 1;
  constructor(public rest: UserService, private http: HttpClient) {

  }

  ngOnInit(): void {

    this.add_member.number_of_child = 1;
    this.add_member.siblings_firstname = new Array(this.add_member.siblings_firstname).fill("");
    this.add_member.siblings_lastname = new Array(this.add_member.siblings_lastname).fill("");
    this.add_member.siblings_birthdate = new Array(this.add_member.siblings_birthdate).fill("");
    this.add_member.siblings_middlename = new Array(this.add_member.siblings_middlename).fill("");
  }

  change_number() {
    this.add_member.number_of_child = this.add_member.number_of_child;
  }
  check_info(action = 'next') {

    if (action == 'next') {
      if (this.count >= 1 && this.count <= 2) {
        this.count = this.count + 1;
      }
    }
    else if (action == 'previous') {
      if (this.count >= 2) {
        this.count = this.count - 1;
      }

    }
  }
  submit() {
    this.http.post(this.rest.domain + "/api/family/add_member",
      {
        data : this.add_member
      },
      {
      })
      .subscribe(response => {
      },
        error => {
          console.log(error);
        });
  }


}
