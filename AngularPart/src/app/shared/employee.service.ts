import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee:Employee;
  employees:Employee[];
  readonly baseURL = "http://localhost:3000/employees";

  constructor(private http:HttpClient) { }

postEmployee(emp : Employee){
   return this.http.post(this.baseURL,emp); 
}

getEmployeeList(){
  return this.http.get(this.baseURL);
}

putEmployee(emp:Employee){
  return this.http.put(this.baseURL + `/${emp.EmpID}`,emp);
}

deleteEmployee(EmpID:number){
  return this.http.delete(this.baseURL+`/${EmpID}`);
}

}