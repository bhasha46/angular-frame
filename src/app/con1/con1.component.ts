import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import SplitType from 'split-type';
@Component({
  selector: 'app-con1',
  templateUrl: './con1.component.html',
  styleUrls: ['./con1.component.css']
})
export class Con1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.call();
  }
  call(){
    const text=new SplitType("#text");
    gsap.fromTo('.down',{
      y:10
    },{
        y:0,repeat:-1,duration:2,yoyo:true
      })
    gsap.fromTo('.char',{
      y:20,
      stagger:0.05,
      duration:2,
      rotate:25,
      ease: "power2.out",
    },{
      y:0,
      rotate:0
    })
  }
}
