import { Injectable } from "@angular/core";

@Injectable()
export class ComService {
  public slot = [];
  public a1: boolean = false;
  public a2: boolean = false;
  public rcustomer_name: string = "";
  public rcustomer_vechicle: string = "";
  public rparking_name: string = "";
  public rparkingslot: number;

  public rparkingtime: string = "";
  public ramount: number;

  public data: any = [
    {
      parking_name: "kv nagar",
      total_spots: 8,
      available11: 8,
      available12: 6,
      flag: 0
    },
    {
      parking_name: "north car strret",
      total_spots: 11,
      available11: 6,
      available12: 10,
      flag: 0
    },

    {
      parking_name: "balaji street",
      total_spots: 8,
      available11: 4,
      available12: 6,
      flag: 0
    },

    {
      parking_name: "jb street",
      total_spots: 10,
      available11: 8,
      available12: 6,
      flag: 0
    }
  ];
}
