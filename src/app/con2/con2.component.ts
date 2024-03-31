import { Component, OnInit,AfterViewInit } from '@angular/core';
import {gsap} from 'gsap';
import {Draggable} from "gsap/Draggable";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-con2',
  templateUrl: './con2.component.html',
  styleUrls: ['./con2.component.css']
})
export class Con2Component implements OnInit {

  constructor() { }
  ngAfterViewInit():void{
    gsap.registerPlugin(ScrollTrigger,Draggable);
    // this.anim();
   
  }

  ngOnInit(): void {
  }
  anim(){
    gsap.fromTo('.candle',{
      scrollTrigger: {
        trigger:document.body,
        start:"top center",
        end:"bottom center",
        toggleActions:"restart resume reverse none"
      }, 
      opacity:0,
      y:500
    },{
      y:0,
      opacity:1,
      duration:3
    })
  }
}
