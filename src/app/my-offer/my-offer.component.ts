import { OfferService } from './../offer.service';
import { Component, OnInit } from '@angular/core';
import { Offer } from '../model/offer';

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styleUrls: ['./my-offer.component.css']
})
export class MyOfferComponent implements OnInit {
  offers:Offer[] = []

  pageError:string=""
  constructor(private offerService:OfferService) { }

  ngOnInit(): void {
    
     let token = localStorage.getItem("token")
     let id = Number(localStorage.getItem('userId'))
 
    
     if(token!=null){
       this.offerService.getMyOffers(token,id).subscribe((data:Offer[])=>{
        console.log(data)
         this.offers = data;
       },error=>{
         console.log(error.status)
 
         if(error.status==404){
           this.offers = []
           this.pageError = "No offers found"
         }
         else if(error.status==500){
          this.offers = []
          this.pageError = "No offers found"
        }
       
 
      
         else{
           this.pageError = "Error Occured please try again later"
         }
       })
     }
  }

}
