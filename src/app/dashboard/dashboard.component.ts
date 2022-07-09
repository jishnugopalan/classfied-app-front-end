import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Offer } from '../model/offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("category") category: ElementRef = new ElementRef("");
  @ViewChild("postedDate") postedDate: ElementRef = new ElementRef("");

  pageError: string = ""
  showError:boolean = false

  token: string | null = ""
  offers: Offer[] = []
  constructor(private offerService:OfferService) { }
  closebar(){
    this.showError=false
  }
  filterByTopLikes() {
    if (this.token != null)
      this.offerService.getOffersByTopLikes(this.token).subscribe((data: Offer[]) => {
        console.log(data);
        this.offers = data;
      },
        error => {
          this.pageError = "We encountered some error please try again later"
          this.showError = true
          console.log(error);
        });
  }
  filterByPostedDate() {
    let postedDate = this.postedDate.nativeElement.value
    if (this.token != null)
      this.offerService.getOffersByPostedDate(this.token, postedDate).subscribe((data: Offer[]) => {
        console.log(data);
        this.offers = data;
      },
        error => {
          console.log(error)
          if (error.status == 400)
            this.pageError = "please enter a valid date"

          else if (error.status == 404)
            this.pageError = "no offers found"
          else
            this.pageError = "We encountered an error please try again later"
          this.showError = true
          console.log(error);
        });
  }
  onCategoryChange() {
    let category = this.category.nativeElement.value

    //get the offers filtered by category
    if (this.token != null)
      this.offerService.getOffers(this.token, category).subscribe((data: Offer[]) => {
        console.log(data);
        this.offers = data;
      },
        error => {
          if(error.status == 404)
            this.pageError = "no offers found try a different category"
          else
            this.pageError = "We encountered some error please try again later"
          this.showError =true
          console.log(error);
        });
  }
  ngOnInit(): void {
     //get the token
     this.token = localStorage.getItem('token');

     //retrive the offers (default category electronics)
     if (this.token != null) {
       this.offerService.getOffers(this.token, "electronics").subscribe((data: Offer[]) => {
         console.log(data);
         this.offers = data;
       },
         error => {
           console.log(error);
           this.pageError = "No offers found"
           this.showError = true
         });
     }
  }

}
