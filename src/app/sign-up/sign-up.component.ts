import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupRegisterComponent } from '../popup-register/popup-register.component';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    
   name ="";
   email = "";
   phonenumber ="";
   password = "";
   passwordr = "";
   result : any;

  constructor(private router : Router, private dataservice : DataService , private dialog : MatDialog) { }

  ngOnInit(): void {
  }
      signup(){
        var result : number;
        const signupData={
          email : this.email,
          password : this.password,
          phonenumber : this.phonenumber,
          name : this.name
         }

        if(this.name=="" || this.email == "" || this.phonenumber == "" || this.password== "" || this.passwordr == "" || this.password != this.passwordr)
         this.router.navigateByUrl("sign-up");

         else{
          this.dataservice.getItemId(signupData.email)
          .subscribe((res : any)=>{
            console.log(res);
            //this.result=this.result + res.length;
            this.result = res;
            console.log(this.result.length);
             

            if(this.result.length){
              console.log("User exists");
              //this.router.navigateByUrl("sign-up");
              this.dialog.open(PopupRegisterComponent); 
           }
           else{
               
            //    console.log(result)
               this.dataservice.createItem(signupData)
                .subscribe((res : any)=>{
                  console.log(res);
                })  
                this.router.navigateByUrl("login");

            }
         })

        }

             
             
            
            
        
         
        
      }
    
      
    

    }     
