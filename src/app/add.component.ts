import { Component, ɵConsole } from "@angular/core";
import { ComService } from "./communication.service";

@Component({
  selector: "add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class addComponent {
  name: string = "";
  spots: number;
  new:any=[];
  
  obj = {};

  constructor(public com:ComService){

  }

  check() {
    this.obj["parking_name"] = this.name;
    this.obj["total_spots"] = this.spots;
    this.obj["available"] = this.spots;
    this.obj["flag"] = 0;
    this.new.push(this.obj);
    this.com.data.push(this.obj);
    console.log(this.com.data);
  }
 
}
