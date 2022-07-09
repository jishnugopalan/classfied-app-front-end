import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { messageResponse } from '../model/messageResponse';
import { OfferService } from '../offer.service';
import { PointsService } from '../points.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
 
 token: String | null = ""

 id: number = 0

 pageError: string = ""

 employee: Employee = new Employee(0, "", "", "", 0, 0, "", 0)

  constructor(private pointsService:PointsService,private offerService:OfferService) { }
  updatePoints() {

    //check token and call http service
    if (this.token != null)
      this.pointsService.updatePoints(this.token, this.id).subscribe((data: messageResponse) => {

        //save the employee's points
        this.employee.pointsGained = Number(data.message.split(" ")[3])
        this.pageError = "points refreshed successfully"
      }, error => {
        console.log(error)
        this.pageError = "we encountered some error please try again later"
      })
  }
  ngOnInit(): void {
    
    this.token = localStorage.getItem('token')
    this.id = Number(localStorage.getItem('userId'))

  
    if (this.token != null) {
      this.offerService.getProfile(this.token, this.id).subscribe((data: Employee) => {

       
        this.employee = data
        console.log(data)
      }, error => {
        console.log(error)
        this.pageError = "we encountered some error please try again later"
      })
    }
  }

}
