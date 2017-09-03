/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 $(document).ready(function (){
     
              $("#home-nav").click(function (){
                $('html, body').animate({
                    scrollTop: $("#home-nav").offset().top +100
                }, 2000);
            });
            
     
            $("#portfolio-nav").click(function (){
                $('html, body').animate({
                    scrollTop: $("#portfolio-div").offset().top -100
                }, 2000);
            });
            
            $("#about-nav").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about-div").offset().top
                }, 1000);
            });
            
             $("#contact-nav").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact-div").offset().top
                }, 800);
            });
            
        });