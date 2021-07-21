import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

  constructor(public rest: UserService, private http: HttpClient, private toastr: ToastrService) {

  }

    family_list                :any = null;
    family_info                :any = null;
    family_id                  :any = null;
    family_single_data         :any = null;

  ngOnInit(): void {

    this.load_family_list();
  }

  load_family_list()
  {
    this.http.post(this.rest.domain + "/api/family/load_family_list",
    {
    },
    {
    })
    .subscribe(response => {
      this.family_list      = response;

      console.log(this.family_list);
      

    },
      error => {
        console.log(error);
      });
  }
  get_info(id:any)
  {
    this.family_id = id;
    this.http.post(this.rest.domain + "/api/family/get_info",
    {
      family_id : id
    },
    {
    })
    .subscribe(response => {
      this.family_info      = response;      

    },
      error => {
        console.log(error);
      });
    
  }
  delete(id:any)
  {
    this.http.post(this.rest.domain + "/api/family/delete",
    {
      family_id : id
    },
    {
    })
    .subscribe(response => {
      this.toastr.success('Deleted Successfully', 'Information', {
        positionClass: 'toast-top-right', tapToDismiss: true
     });
     this.load_family_list();   

    },
      error => {
        console.log(error);
      });
  }
  edit(id:any)
  {
    console.log('test', id);
    
    this.http.post(this.rest.domain + "/api/family/edit",
    {
      id : id
    },
    {
    })
    .subscribe(response => {
      this.family_single_data = response;
    },
      error => {
        console.log(error);
      });
  }
  update(id:any)
  {
    this.http.post(this.rest.domain + "/api/family/update",
    {
      id : id,
      data : this.family_single_data
    },
    {
    })
    .subscribe(response => {
      this.toastr.success('Updated Successfully', 'Information', {
        positionClass: 'toast-top-right', tapToDismiss: true
     });
     this.load_family_list();   
    },
      error => {
        console.log(error);
      });
  }
}
