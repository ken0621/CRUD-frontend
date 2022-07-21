import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(public rest: UserService, private http: HttpClient, private toastr: ToastrService) {

  }
  ngOnInit(): void {
  }

  test()
  {
    this.http.post(this.rest.domain + "/api/family/load_family_list",
    {
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
