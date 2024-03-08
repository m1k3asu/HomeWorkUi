
import { Component, ViewChild, OnInit } from '@angular/core';
import { Grid, GridComponent, Smart } from 'smart-webcomponents-angular/grid';
import { ICustomerModel } from './models/customer-model';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  constructor(private dataService: DataService)  {}

  rowData: ICustomerModel[] = [];
  // id: number = 0;
  // firstName: string = '';
  // lastName: string = '';
  // street: string = '';
  // city: string = '';
  // state: string = '';
  // zip: string = '';
  // phone: string = '';

  //customerList: string[] = [];

  
 
  
   
  layout = {
    rowHeight: 40
  }

  dataSource = new Smart.DataAdapter({
      dataSource: this.rowData, 
      dataFields: [
          'id: number',
          'firstName: string',
          'lastName: string',
          'street: string',
          'city: string',
          'state: number',
          'zip: string',
          'phone: string'
      ]
  });

  columns = [
    { label: 'First Name', dataField: 'firstName', width: 200 },
    { label: 'Last Name', dataField: 'lastName', width: 200 },
    { label: 'Street', dataField: 'street', width: 400 },    
    { label: 'City', dataField: 'city', width: 200 },
    { label: 'State', dataField: 'state', width: 100 },
    { label: 'Zip', dataField: 'zip', width: 200 },
    { label: 'Phone', dataField: 'phone', width: 200 },
  ]

  appearance = {
    showRowHeaderNumber: true
  }

  editing = {
    enabled: true,
    action: 'click',
    mode: 'row'
  }

  ngOnInit(): void {   }

  getCustomers(fname: string, lname: string, phone: string, city:string) {    
    this.getFilteredCustomers(fname, lname, phone, city)
  }

  getFilteredCustomers(fname: string, lname:string, phone: string, city:string) {
    this.dataService.getFilteredCustomers(fname, lname, phone, city)
      .subscribe(
        (response) => { 
          let athisRowData = response;
          this.rowData = response;
          this.dataSource = this.rowData
        },
        (error) => {  
          console.error('Request failed with error')
        },
        () => {
          //console.error('Request completed');      
        })
  }
}

