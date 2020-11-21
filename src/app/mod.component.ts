import { Component } from "@angular/core";
import { ComService } from "./communication.service";

@Component({
  selector: "mod",
  templateUrl: "./mod.component.html",
  styleUrls: ["./mod.component.css"]
})
export class modComponent {
  flag: boolean = false;
  flag1: boolean = false;
  btn: boolean = true;

  name: string;
  spots: number;
  index: number;
  available: number;

  constructor(public com: ComService) {}

  setflag() {
    this.flag = true;
    this.flag1 = false;
    this.btn = false;
  }
  setflag1() {
    this.flag = false;
    this.flag1 = true;
    this.btn = false;
  }
  remove() {
    for (let order of this.com.data) {
      if (this.name == order.parking_name) {
        this.com.data.splice(this.com.data.indexOf(order), 1);
        break;
      }
    }
  }
  modify() {
    for (let order of this.com.data) {
      if (this.name == order.parking_name) {
        this.index = this.com.data.indexOf(order);
        this.available =
          this.com.data[this.index].available +
          (this.spots - this.com.data[this.index].total_spots);
        this.com.data[this.index].total_spots = this.spots;
        this.com.data[this.index].available = this.available;

        break;
      }
    }
  }
}
