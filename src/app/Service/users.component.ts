import { Component, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  title = 'apidata';
  data: any;
  data$: any;
  constructor(private apiservice:ApiService) {}
  
  ngOnInit(): void{
    this.data$ = this.apiservice.getdata().pipe(tap((user) => this.data = user))
  }
}
