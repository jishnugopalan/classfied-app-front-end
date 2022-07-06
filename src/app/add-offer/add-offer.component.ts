import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { messageResponse } from '../model/messageResponse';
import { Offer } from '../model/offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
 

  //error handling
  pageError: String = ""


  offer: Offer = new Offer(0, "", "", "", new Date(), new Date(), new Date(), 0)

  token:any
  offerForm: FormGroup = new FormGroup({})

  constructor(private offerService:OfferService,private route:Router) { }

  get name() { return this.offerForm.get('name') }
  get description() { return this.offerForm.get('description') }
  get category() { return this.offerForm.get('category') }



  onSubmit(){
    console.log(this.token)
    console.log(this.offerForm.value)
    this.offer.name = this.offerForm.value.name
    this.offer.description = this.offerForm.value.description
    this.offer.category = this.offerForm.value.category
    console.log(this.offer)
    this.offerService.addOffer(this.token, this.offer).subscribe((data: messageResponse) => {
      console.log(data)
    },error=>{
      console.log(error)
      this.pageError = "We encountered an error please try again later"
    })

  }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    
    this.offerForm = new FormGroup({
     description: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      category: new FormControl("Electronics", [
        Validators.required
      ])
    })
  }

}
