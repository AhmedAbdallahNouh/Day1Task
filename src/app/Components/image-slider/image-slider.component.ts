import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
public imagePath = ["assets/Images/1.jpg","assets/Images/2.jpg","assets/Images/3.jpg","assets/Images/4.jpg"];
public index = 0;
autoplay:any;
chNext(){
  if(this.index < this.imagePath.length-1){
    this.imagePath[++this.index]
  }
}
chPrevious(){
  if(this.index > 0){
    this.imagePath[--this.index]
  }
}
Play(){
  this.autoplay = setInterval(()=>{
  this.imagePath[++this.index];
  if(this.index > this.imagePath.length-1){
    this.index =0;
  }
  },500)
 
}
Stop(){
 clearInterval(this.autoplay);
}
}
