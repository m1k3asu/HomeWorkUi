import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //baseApiUrl = "https://localhost:7268/";
  baseApiUrl = "https://localhost:7268/";

  constructor(private http: HttpClient) { }

  // Avoid this call
  getAllCustomers(): Observable<any> {
    return this.http.get(this.baseApiUrl + "/api/Home/GetCustomersByFilter");
  }

  getFilteredCustomers(fname: string, lname:string, phone: string, city:string): Observable<any> {
    const headers = new HttpHeaders().set('ContentType', 'application/json');  
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS, DELETE");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin, X-Requested-With, Content-Type, Accept");
    const params = new HttpParams().append('fname', fname).append('lname', lname).append('phone', phone).append('city', city);
    return this.http.get(this.baseApiUrl + "api/Home/GetCustomersByFilter", {headers, params}); 
    
  }



  
}
