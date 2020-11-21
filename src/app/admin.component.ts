import { Component } from "@angular/core";
import { ComService } from "./communication.service";

@Component({
  selector: "admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class adminComponent {
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
