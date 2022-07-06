import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { messageResponse } from '../model/messageResponse';
import { Offer } from '../model/offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {
  offer: Offer = new Offer(0, " ", " ", " ", new Date, new Date, new Date, 0)
 token: string | null = ""
 id: number = 0
 offerForm: FormGroup = new FormGroup({})
 pageError: string = ""
  constructor(private route: ActivatedRoute,private offerService:OfferService) { }
  get name() { return this.offerForm.get('name') }
  get description() { return this.offerForm.get('description') }
  get category() { return this.offerForm.get('category') }

  ngOnInit(): void {
       
       this.token = localStorage.getItem("token")

      
       this.id = Number(this.route.snapshot.paramMap.get('id'))
  
       if (this.token != null) {
         this.offerService.getOfferDetailsById(this.token, this.id).subscribe((data: Offer) => {
           this.offer = data
           
   
           this.offerForm = new FormGroup({
             description: new FormControl(this.offer.description, [
               Validators.required,
               Validators.minLength(10)
             ]),
             name: new FormControl(this.offer.name, [
               Validators.required,
               Validators.minLength(3)
             ]),
             category: new FormControl(this.offer.category, [
               Validators.required
             ])
           })
         }, error => {
           console.log(error)
           this.pageError = "There was some error, Please try again later"
         })
       }
  }
  onSubmit() {

    this.offer.name = this.offerForm.value.name
    this.offer.description = this.offerForm.value.description
    this.offer.category = this.offerForm.value.category

    if (this.token != null)
      this.offerService.updateOffer(this.token, this.offer).subscribe((data: messageResponse) => {
        this.pageError = data.message
      }, error => {

    
        if (error.status = 401) {
          this.pageError = "Offer editing is denied"
        }
      })
  }

}
