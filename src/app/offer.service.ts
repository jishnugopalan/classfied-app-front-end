import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { messageResponse } from './model/messageResponse';
import { Offer } from './model/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  offerservice= "http://localhost:8000/offer"
  employeeserviceUrl = "http://localhost:8070/employee"
  constructor(private http: HttpClient) { }
  addOffer(token: String, offer: Offer) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.post<messageResponse>(this.offerservice + "/addOffer", offer, options)
  }
  getMyOffers(token: String, id: number) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.get<Offer[]>(this.employeeserviceUrl + "/viewEmployeeOffers/" + id, options)
  }
  
  getOfferDetailsById(token: string, id: number) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.get<Offer>(this.offerservice + "/getOfferDetails/" + id, options)
  }
  updateOffer(token: String, offer: Offer) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.post<messageResponse>(this.offerservice + '/editOffer', offer, options)
  }
  getOffers(token: string, category: string) {
    let options = {
      headers: { "Authorization": "Bearer " + token}
    }
    return this.http.get<Offer[]>(this.offerservice + "/getOfferByCategory/" + category, options)
  }
  getOffersByPostedDate(token: string, postedDate: string) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.get<Offer[]>(this.offerservice + "/getOfferByPostedDate/" + postedDate, options)
  }

  saveLike(token: string, id: number) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.post(this.employeeserviceUrl + "/likeOffer/" + id, null, options)
  }
  engageOffer(token: String, offerId: number, empId: number) {
    let options = {
      headers: { "Authorization": "Bearer " + token },
      params: { "offerId": offerId, "employeeId": empId }
    }
    return this.http.post<messageResponse>(this.offerservice + "/engageOffer", null, options)
  }
  getOffersByTopLikes(token: string) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.get<Offer[]>(this.offerservice + "/getOfferByTopLikes", options)
  }
  getProfile(token: String, id: number) {
    let options = {
      headers: { "Authorization": "Bearer " + token }
    }
    return this.http.get<Employee>(this.employeeserviceUrl + "/viewProfile/" + id, options)
  }
  getRecentlyLiked(token: string) {
    let options = {
      headers: { "Authorization": "Bearer " + token },
    }
    return this.http.get<Offer[]>(this.employeeserviceUrl + "/recentlyLiked", options)
  }
}
