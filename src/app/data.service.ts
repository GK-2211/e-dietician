import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
//import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    dataService="";
  constructor(private http : HttpClient) { }
  


  getDataVegetarian(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=breakfast&diet=Vegetarian")
  }

  getDataVegan(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=breakfast&diet=Vegan")
  }

  getDataPaleo(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=breakfast&diet=Paleo")
  }

  getDataWhole(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=breakfast&diet=Whole30")
  }
  

  getDataVegetarian1() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=maincourse&diet=Vegetarian")
  }

  getDataVegan1() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=maincourse&diet=Vegan")
  }

  getDataPaleo1() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=maincourse&diet=Paleo")
  }

  getDataWhole1() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=maincourse&diet=Whole30")
  }
  

  getDataVegetarian2() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=salad&diet=Vegetarian")
  }

  getDataVegan2() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=salad&diet=Vegan")
  }

  getDataPaleo2() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=salad&diet=Paleo")
  }

  getDataWhole2() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=9c69283d083942c9a129b0ad761fe908&type=salad&diet=Whole30")
  }
  
  
  getMealPlan() : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/mealplanner/generate?apiKey=9c69283d083942c9a129b0ad761fe908&timeFrame=day");
  }

  getItemId(email: any) :  Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/user/"+email);

   }
   


   createItem(data: any) :  Observable<any>{
    return this.http.post("http://localhost:3000/user",data);

   }

   completeProfile(data: any) :  Observable<any>{
    return this.http.post("http://localhost:3000/user/profile",data);

   }

   
}
