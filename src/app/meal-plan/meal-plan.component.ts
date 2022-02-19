import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css']
})
export class MealPlanComponent implements OnInit {
  meal :any=[];
  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
    this.dataservice.getMealPlan()
    .subscribe((res : any)=>{
      console.log(res.meals);
      this.meal=res.meals;
    })
  }

}
