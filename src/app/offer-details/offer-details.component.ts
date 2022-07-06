import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../model/offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  offer: Offer = new Offer(0, "offer name", "offer description", "category", new Date(), new Date(), new Date(), 0)
  empId: number = 0
  id: number = 0
  
  token: string | null = ""
  pageError: String = ""
  constructor(private offerService:OfferService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.token = localStorage.getItem("token")
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.empId = Number(localStorage.getItem("userId"))
    if (this.token != null && this.id != 0)
      this.offerService.getOfferDetailsById(this.token, this.id).subscribe((data: Offer) => {
        
        this.offer = data
      })
  }
  

}
