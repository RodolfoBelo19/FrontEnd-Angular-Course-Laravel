import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../employee";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  base = 'http://2c33-192-141-191-216.ngrok.io';

  constructor(
    private httpClient: HttpClient
  ) {}

  getData() {
    return this.httpClient.get(`${this.base}/api/employees`);
  }

  insertData(data: any) {
    return this.httpClient.post(`${this.base}/api/addEmployee`, data);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put(`${this.base}/api/updateEmployee/${id}`, data);
  }

  deleteData(id: any) {
    return this.httpClient.delete(`${this.base}/api/deleteEmployee/${id}`)
  }

  getDataById(id: any) {
    return this.httpClient.get(`${this.base}/api/employee/${id}`)
  }

}
