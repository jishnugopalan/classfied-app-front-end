import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Offer } from '../model/offer';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offer: Offer = { offer_name: "", offer_description: "" }

  
  offerForm: FormGroup = new FormGroup({})
  constructor() { }
  get offer_name() { return this.offerForm.get('offer_name') }
  get offer_description() { return this.offerForm.get('offer_description') }


  onSubmit(){
    console.log(this.offerForm.value)
  }

  ngOnInit(): void {
    this.offerForm = new FormGroup({
      offer_name: new FormControl(this.offer.offer_name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      offer_description: new FormControl(this.offer.offer_description, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

}
