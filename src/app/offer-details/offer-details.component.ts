import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { messageResponse } from '../model/messageResponse';
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
  isLiked: boolean = false
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
  likedIt() {
    this.isLiked = !this.isLiked
  }

 
  submitLike() {
    if (this.token != null)
      this.offerService.saveLike(this.token, this.id).subscribe((data:any) => {
        this.pageError = "your like is saved successfully"
        this.isLiked = false;
        this.offer.likes += 1
      },error=>{
        console.log(error)
        this.pageError = "Some error occured please try again later"
      })
  }


  engageUser() {
  
    if (this.token != null) {
      this.offerService.engageOffer(this.token, this.offer.id, this.empId).subscribe((data: messageResponse) => {
        
        if(data.status == "BAD_REQUEST"){
          this.pageError = data.message
        }else{
          window.location.reload()
        }
        console.log(data)
      }, error => {
        console.log(error);
        this.pageError = "Some error occured please try again later"
      })
    }
  }

}
