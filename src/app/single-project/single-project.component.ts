import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit{
  photoNumber!:any;
  photoArray:string[]=[];
  type!:string;
  singleImage:boolean=false;

  constructor(private service:PhotosService)
  {
    this.photoNumber=this.service.getphotoNumber();
    this.type=this.service.typeString;



    if(this.type=='Beauty'){
      console.log(this.type);
    switch (this.photoNumber.split('/')[4]){
     case '1.jpg':{
       this.photoArray=this.service.Beauty1;
       console.log(this.photoArray);
     }
     break;
     case '4.jpg':{
       this.photoArray=this.service.Beauty2;
     }
     break;
     case '5.jpg':{
       this.photoArray=this.service.Beauty3;
     }
     break;
     case '7.jpg':{
       this.photoArray=this.service.Beauty4;
     }
     break;
     default: this.photoArray=[];
     break;
   }}
   else if (this.type=='Default'){
     switch (this.photoNumber.split('/')[4]){
       case '3.jpg':{
         this.photoArray=this.service.Beauty1;
       }
       break;
       case '4.jpg':{
         this.photoArray=this.service.Beauty2;
       }
       break;
       case 'Home5.jpg':{
         this.photoArray=this.service.Fashion2;
       }
       break;

       default: this.photoArray=[];
       break;
     }

   }
   else if (this.type=='Fashion'){
     switch (this.photoNumber.split('/')[4]){
       case '1.jpg':{
         this.photoArray=this.service.Fashion1;
       }
       break;
       case '2.jpg':{
         this.photoArray=this.service.Fashion5;
       }
       break;
       case 'Home5.jpg':{
         this.photoArray=this.service.Fashion2;
       }
       break;
       case '7.jpg':{
         this.photoArray=this.service.Fashion4;
       }
       break;
       case 'Home7.jpg':{
        this.photoArray=this.service.Fashion3;
      }
      break;
       default: this.photoArray=[];
       break;
     }
   }
   if (this.photoArray.length==0){
    this.singleImage=true;
  }

}

  ngOnInit(): void {
    this.photoNumber=this.service.getphotoNumber();
    this.type=this.service.typeString;



    if(this.type=='Beauty'){
      console.log(this.type);
    switch (this.photoNumber.split('/')[4]){
     case '1.jpg':{
       this.photoArray=this.service.Beauty1;
       console.log(this.photoArray);
     }
     break;
     case '4.jpg':{
       this.photoArray=this.service.Beauty2;
     }
     break;
     case '5.jpg':{
       this.photoArray=this.service.Beauty3;
     }
     break;
     case '7.jpg':{
       this.photoArray=this.service.Beauty4;
     }
     break;
     default: this.photoArray=[];
     break;
   }}
   else if (this.type=='Default'){
     switch (this.photoNumber.split('/')[4]){
       case '3.jpg':{
         this.photoArray=this.service.Beauty1;
       }
       break;
       case '4.jpg':{
         this.photoArray=this.service.Beauty2;
       }
       break;
       case 'Home5.jpg':{
         this.photoArray=this.service.Fashion2;
       }
       break;

       default: this.photoArray=[];
       break;
     }

   }
   else if (this.type=='Fashion'){
     switch (this.photoNumber.split('/')[4]){
       case '1.jpg':{
         this.photoArray=this.service.Fashion1;
       }
       break;
       case '2.jpg':{
         this.photoArray=this.service.Fashion5;
       }
       break;
       case 'Home5.jpg':{
         this.photoArray=this.service.Fashion2;
       }
       break;
       case '7.jpg':{
         this.photoArray=this.service.Fashion4;
       }
       break;
       case 'Home7.jpg':{
        this.photoArray=this.service.Fashion3;
      }
      break;
       default: this.photoArray=[];
       break;
     }
   }
   if (this.photoArray.length==0){
    this.singleImage=true;
  }

  }
}




