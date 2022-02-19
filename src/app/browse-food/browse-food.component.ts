import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-browse-food',
  templateUrl: './browse-food.component.html',
  styleUrls: ['./browse-food.component.css']
})
export class BrowseFoodComponent implements OnInit {

  constructor(private dataservice : DataService) { }
  data1 :any =[];
  data2 :any =[];
  data3 :any =[];
  data4 :any =[];

  data11  : any=[];
  data12  : any=[];
  data13  : any=[];
  data14  : any=[];
  
  data21  : any=[];
  data22  : any=[];
  data23  : any=[];
  data24  : any=[];

  
  selected : any;
  
  ngOnInit(): void {
    this.dataservice.getDataVegetarian(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data1[index] = res.results[index];
         }
    })

    this.dataservice.getDataVegan(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data2[index] = res.results[index];
         }
    })

    this.dataservice.getDataPaleo(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data3[index] = res.results[index];
         }
    })

    this.dataservice.getDataWhole(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data4[index] = res.results[index];
         }
    })
    //console.log(this.data1,this.data2,this.data3,this.data4)
    //console.log(this.dataservice.dataService);

    this.dataservice.getDataVegetarian1()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data11[index] = res.results[index];
         }
    })

    this.dataservice.getDataVegan1()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data12[index] = res.results[index];
         }
    })

    this.dataservice.getDataPaleo1()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data13[index] = res.results[index];
         }
    })

    this.dataservice.getDataWhole1()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data14[index] = res.results[index];
         }
    })
  /////////////////////////////////////////////////
    
  this.dataservice.getDataVegetarian2()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data21[index] = res.results[index];
         }
    })

    this.dataservice.getDataVegan2()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data22[index] = res.results[index];
         }
    })

    this.dataservice.getDataPaleo2()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data23[index] = res.results[index];
         }
    })

    this.dataservice.getDataWhole2()
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data24[index] = res.results[index];
         }
    })
    console.log(this.data21,this.data22,this.data23,this.data24);
  }
  
    

}
