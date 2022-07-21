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

  data        :any = {};
  constructor(public rest: UserService, private http: HttpClient, private toastr: ToastrService) {

  }
  ngOnInit(): void {

    this.data.info="sana all";
  }

  test()
  {
    // this.http.get(this.rest.domain + "/family/load_family_list",
    // {
    // },
    // {
    // })
    // .subscribe(response => {
           

    // },
    //   error => {
    //     console.log(error);
    //   });
  }

  arrayToQueryString(array_in:any)
   	{
       var out = new Array();

       for(var key in array_in){
           out.push(key + '=' + encodeURIComponent(array_in[key]));
       }

       return out.join('&');
   }

}
