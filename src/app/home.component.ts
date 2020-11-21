import { Component } from "@angular/core";
import { ComService } from "./communication.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  parking_slots: any = [];
  constructor(public com: ComService) {
    this.copy();
  }
  copy() {
    this.parking_slots = this.com.data;
  }

  check(na) {
    this.com.slot = na;
  }
}
