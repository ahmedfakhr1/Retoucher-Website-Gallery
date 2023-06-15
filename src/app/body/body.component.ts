import { Component,OnDestroy,OnInit,AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhotosService } from '../photos.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  ContentLoaded:boolean=false;
  photoarray:string[]=[];
  type:string="Default";
  NoOfPhotos:number=0;
  isOpen:boolean=true;


  // toggleTransision(){
  //   this.isOpen=!this.isOpen;
  // }
  private gettingType:Subscription; //important to create a subscription

  constructor(private service : PhotosService) {
    // service.setType('Default');
    service.setType(window.sessionStorage.getItem('type'));
    this.gettingType= this.service.getType().subscribe
             (Type => { //message contains the data sent from service
             this.type = Type;
             switch (this.type){
              case 'Default' :{this.NoOfPhotos=25;
                this.photoarray=this.service.Defaultarray;
                }
              break;
              case 'Beauty' :{this.NoOfPhotos=11;
                  this.photoarray=this.service.Beautyarray;
                }
              break;
              case 'Fashion' :{this.NoOfPhotos=7;
                this.photoarray=this.service.Fashionarray;
              }
              break;
              case 'Portrait' :{this.NoOfPhotos=9;
                this.photoarray=[];
                this.photoarray=this.service.Portraitarray;
                }
              break;
              case 'Property' :{this.NoOfPhotos=26;
                this.photoarray=this.service.Property;
                }
              break;
              default:{

                  this.NoOfPhotos=25;
                  this.photoarray=this.service.Defaultarray;

              }
            }
            // for (let i = 2;i<this.NoOfPhotos+1;i++){
            //   this.photoarray.push(`${i}`+'.jpg');
            // }
            console.log(this.photoarray[0]);
             });

  }


  ngOnInit(): void {

    // this.service.setType('Default');
    this.sliderFunction();
    this.service.setType(window.sessionStorage.getItem('type'));
    switch (this.type){
      case 'Default' :{this.NoOfPhotos=25;
        this.photoarray=this.service.Defaultarray;
        }
      break;
      case 'Beauty' :{this.NoOfPhotos=11;
          this.photoarray=this.service.Beautyarray;
        }
      break;
      case 'Fashion' :{this.NoOfPhotos=7;
        this.photoarray=this.service.Fashionarray;
      }
      break;
      case 'Portrait' :{this.NoOfPhotos=9;
        this.photoarray=[];
        this.photoarray=this.service.Portraitarray;
        }
      break;
      case 'Property' :{this.NoOfPhotos=26;
        this.photoarray=this.service.Property;
        }
      break;
      default:{

        this.NoOfPhotos=25;
        this.photoarray=this.service.Defaultarray;

    }
    }
    // for (let i = 2;i<this.NoOfPhotos+1;i++){
    //   this.photoarray.push(`${i}`+'.jpg');
    // }
    console.log(this.photoarray[0]);
    // setTimeout(()=>{
      this.ContentLoaded=true;


  }


   setPhotoNumber(photoNumber:string){
    this.service.setType(this.type);
this.service.setphotoNumber(photoNumber);

   }
   sliderFunction(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    const leftBtn = document.querySelector('.left-btn') as HTMLElement;
    const rightBtn = document.querySelector('.right-btn') as HTMLElement;
    const scroll_container = document.getElementById("scroll-container") as HTMLElement;
    console.log(scroll_container)
  console.log(slider.scrollWidth)
    const scrollStep = slider.clientWidth / 4;
    const scrollDelay = 5000; // 5 seconds
    // Hide left button initially
    leftBtn.classList.add('hide');

    // Show/hide buttons on scroll
    slider.addEventListener('scroll', () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft === 0) {
        leftBtn.classList.add('hide');
      } else {
        leftBtn.classList.remove('hide');
      }

      if (slider.scrollLeft === maxScrollLeft) {
        rightBtn.classList.add('hide');
      } else {
        rightBtn.classList.remove('hide');
      }
    });

    // Scroll left on left button click
    leftBtn.addEventListener('click', () => {
      slider.scrollBy({
     left: -400,
  behavior: "smooth",});
    });
    // Initialize touch position variables
let touchStartX = 0;
let touchEndX = 0;

// Add touch event handlers
slider.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

slider.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;

  // Determine swipe direction based on touch start and end positions
  if (touchEndX < touchStartX) {
    // Swipe left, scroll right
    slider.scrollBy({
      left: touchStartX-touchEndX,
      behavior: 'smooth'
    });
  } else if (touchEndX > touchStartX) {
    // Swipe right, scroll left
    slider.scrollBy({
      left:touchStartX-touchEndX,
      behavior: 'smooth'
    });
  }
});
    leftBtn.addEventListener('mouseenter', () => {
      leftBtn.classList.remove('lowOp');
    });
    leftBtn.addEventListener('mouseleave', () => {
      leftBtn.classList.add('lowOp');
    });
    rightBtn.addEventListener('mouseenter', () => {
      rightBtn.classList.remove('lowOp');

    });
    rightBtn.addEventListener('mouseleave', () => {
      rightBtn.classList.add('lowOp');

    });

    // Scroll right on right button click
    rightBtn.addEventListener('click', () => {
      leftBtn.classList.remove('hide');
      slider.scrollBy({
        left: 400,
     behavior: "smooth"})}
     );

    // Hide buttons after 5 seconds of inactivity
    let hideTimeoutId: ReturnType<typeof setTimeout>;
    const hideButtons = () => {
      leftBtn.classList.add('hide');
      rightBtn.classList.add('hide');
    };

    const resetHideTimeout = () => {
      clearTimeout(hideTimeoutId);
      hideTimeoutId = setTimeout(hideButtons, scrollDelay);
    };

    // slider.addEventListener('scroll', resetHideTimeout);
    // leftBtn.addEventListener('mouseenter', resetHideTimeout);
    // rightBtn.addEventListener('mouseenter', resetHideTimeout);
  }










}


