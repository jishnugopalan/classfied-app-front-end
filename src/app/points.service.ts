import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { messageResponse } from './model/messageResponse';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  pointsserviceUrl = "http://localhost:8090/points"
  constructor(private http: HttpClient) { }
  updatePoints(token: String, id: number) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.post<messageResponse>(this.pointsserviceUrl + "/refreshpointsbyemp/" + id, null, options)
  }

}
