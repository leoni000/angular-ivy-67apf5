import { Component } from "@angular/core";
import { ComService } from "./../communication.service";
@Component({
  selector: "booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class bookingComponent {
  customer_name: string = "";
  customer_mobile: number;
  customer_vechicle: string = "";
  customer_email: string = "";
  ck1: boolean;
  ck2: boolean;
  parkingslot: number = 9;
  amount: number;
  book: any = [];
  constructor(public com: ComService) {
    this.copy();
  }
  copy() {
    this.book = this.com.slot;
    this.book["customer_name"] = this.customer_name;
  }

  populate(ck1, ck2) {
    this.com.rcustomer_name = this.customer_name;
    this.com.rcustomer_vechicle = this.customer_vechicle;
    this.com.rparking_name = this.book.parking_name;
    this.com.rparkingslot = this.parkingslot;

    if (this.ck1 == this.ck2) {
      this.amount = 300;
      this.com.rparkingtime = "11am to 1pm";
      this.com.a1 = this.com.a2 = true;
    } else if (this.ck1) {
      this.amount = 150;
      this.com.rparkingtime = "11am to 12pm";
      this.com.a1 = true;
    } else {
      this.amount = 150;
      this.com.rparkingtime = "12pm to 1am";
      this.com.a2 = true;
    }
    this.com.ramount = this.amount;
  }
}
