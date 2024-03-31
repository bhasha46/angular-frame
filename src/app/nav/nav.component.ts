import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit , AfterViewInit {

  constructor() { }
 ngAfterViewInit():void{
 }
  ngOnInit(): void {
    $('.home').mouseover(()=>{
      $('.home').css("border-bottom","2px solid rgb(203,154,114)")
      $('.home1').fadeIn(1000).css("display","block")
      $('.page2').css("display","none")
      $('.blog1').css("display","none")
    })
    $('.home').mouseleave(()=>{
      setTimeout(()=>{
        $('.home1').fadeOut(1000).css("display","none")
        $('.home').css("border-bottom","none")
      },5000)
    })
    $('.page').mouseover(()=>{
      $('.page').css("border-bottom","2px solid rgb(203,154,114)")
      $('.page2').fadeIn(1000).css("display","block")
      $('.home1').css("display","none")
      $('.blog1').css("display","none")
    })
    $('.page').mouseleave(()=>{
      setTimeout(()=>{
        $('.page2').fadeOut(1000).css("display","none")
        $('.page').css("border-bottom","none")
      },5000)
    })
    $('.blog').mouseover(()=>{
      $('.blog').css("border-bottom","2px solid rgb(203,154,114)")
      $('.blog1').fadeIn(1000).css("display","block")
      $('.home1').css("display","none")
      $('.page2').css("display","none")
      $('.single1').css("display","none")
    })
    $('.blog').mouseleave(()=>{
      setTimeout(()=>{
        $('.blog1').fadeOut(1000).css("display","none")
        $('.blog').css("border-bottom","none")
        $('.single1').fadeOut(1000).css("display","none")
        $('.single').css("border-bottom","none")
      },5000)
    })
    $('.single').mouseover(()=>{
      $('.sigle').css("border-bottom","2px solid rgb(203,154,114)")
      $('.single1').fadeIn(1000).css("display","block")
      $('.home1').css("display","none")
      $('.page2').css("display","none")
    })
    $('.shop').mouseover(()=>{
      $('.shop').css("border-bottom","2px solid rgb(203,154,114)")
      $('.shop1').fadeIn(1000).css("display","block")
      $('.home1').css("display","none")
      $('.page2').css("display","none")
      $('.blog1').css("display","none")
    })
    $('.shop').mouseleave(()=>{
      setTimeout(()=>{
        $('.shop1').fadeOut(1000).css("display","none")
        $('.shop').css("border-bottom","none")
        $('.product1').css("display","none")
      },5000)
    })
    $('.product').mouseover(()=>{
      $('.product1').fadeIn(1000).css("display","block")
    })
    $('.contact').mouseover(()=>{
      $('.shop').css("border-bottom","2px solid rgb(203,154,114)")
    })
    $('.contact').mouseleave(()=>{
      $('.shop').css("border-bottom","none")
    })
  }
    call(){
      gsap.fromTo('.home',{
        x:100
      },{
          x:0,repeat:1,duration:2
        })
    }
}
