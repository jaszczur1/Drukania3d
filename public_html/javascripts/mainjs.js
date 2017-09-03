/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
//
//
//$('#koliber').


 $(document).ready(function (){
     
     
            $("#koliber").click(function (){
                $('html, body').animate({
                    scrollTop: $("#koliber-selection").offset().top
                }, 2000);
            });
        });