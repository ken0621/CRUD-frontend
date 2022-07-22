import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  data        :any = {};
  account_details :any = {};
  headers :any = null;
  birthdate :any = "2005-03-05";
  submitted   :any  = false;
  show_pass		:any	= false;
  info      :any = {};
	error_message = null;
  
  constructor(public rest: UserService, private http: HttpClient, private toastr: ToastrService) {

  }
  ngOnInit(): void {

    this.data.info="sana all";
  }

  create()
  {
    this.submitted = true;
    $.get(this.rest.domain + "/spotify/registration" + '?' + this.arrayToQueryString(this.info),(response) =>
    {   
      if(response['status'] == 'success')
      {
        this.submitted = false;
        this.toastr.success(response['status_message'], 'Information', {
        positionClass: 'toast-top-right', tapToDismiss: true});  
      }
      else
      {
        this.submitted = false;
        this.toastr.error(response['status_message'], 'Information', {
        positionClass: 'toast-top-right', tapToDismiss: true});
      }
      
    });  
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
