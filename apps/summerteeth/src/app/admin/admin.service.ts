import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILastName } from '@lunch-and-learn/models';

@Injectable()
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/v2/users';

  constructor(private http: HttpClient) {}

  getLastNames(lastName: string) {
    const url = lastName
      ? `${this.baseUrl}/last?lastName=${lastName}`
      : `${this.baseUrl}/last`;

    return this.http.get<ILastName[]>(url);
  }
}
