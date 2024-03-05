/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/

var arr_coin1 = Array();
var arr_coin2 = Array();
var arr_coin3 = Array();
var arr_coin4 = Array();
var arr_coin5 = Array();


     
function req() {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,GBP-BRL").then(response => response.json())
    .then(data => {
        document.getElementById('value-coin1').innerHTML = 'R$ '+data.USDBRL.bid;
        document.getElementById('value-coin2').innerHTML = 'R$ '+data.EURBRL.bid;
        document.getElementById('value-coin3').innerHTML = 'R$ '+data.BTCBRL.bid;
        document.getElementById('value-coin4').innerHTML = 'R$ '+data.ETHBRL.bid;
        document.getElementById('value-coin5').innerHTML = 'R$ '+data.GBPBRL.bid;
    })   

    // ========================== DOLLAR: 
    fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/8").then(response => response.json())
    .then(data => {

       for (let index = 0; index < data.length; index++) {
            arr_coin1.push(data[index].bid);
       }

       //console.log(arr_coin1)
    })

    // ========================== EURO: 
    fetch("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/8").then(response => response.json())
    .then(data => {

       for (let index = 0; index < data.length; index++) {
            arr_coin2.push(data[index].bid);
       }

       //console.log(arr_coin1)
    })

     // ========================== BITCOIN: 
     fetch("https://economia.awesomeapi.com.br/json/daily/BTC-BRL/8").then(response => response.json())
     .then(data => {
 
        for (let index = 0; index < data.length; index++) {
             arr_coin3.push(data[index].bid);
        }
 
        //console.log(arr_coin1)
     })

      // ========================== ETHEREUM: 
    fetch("https://economia.awesomeapi.com.br/json/daily/ETH-BRL/8").then(response => response.json())
    .then(data => {

       for (let index = 0; index < data.length; index++) {
            arr_coin4.push(data[index].bid);
       }

       //console.log(arr_coin1)
    })

     // ========================== LIBRA: 
     fetch("https://economia.awesomeapi.com.br/json/daily/GBP-BRL/8").then(response => response.json())
     .then(data => {
 
        for (let index = 0; index < data.length; index++) {
             arr_coin5.push(data[index].bid);
        }
 
        //console.log(arr_coin1)
     })
 

 
    
}

req();


$(function () {
    "use strict";
    // ============================================================== 
    // Newsletter
    // ============================================================== 

    //ct-visits    
   setTimeout(() => {
    var sparklineLogin = function () {
        $('#sparklinedash').sparkline(arr_coin1.slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: false,
            barSpacing: '5',
            barColor: '#7ace4c'
        });
        $('#sparklinedash2').sparkline(arr_coin2.slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#7460ee'
        });
        $('#sparklinedash3').sparkline(arr_coin3.slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#ffc107'
        });
        $('#sparklinedash4').sparkline(arr_coin4.slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#1f36b7'
        });
        $('#sparklinedash5').sparkline(arr_coin5.slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#f33155'
        });
    }
    var sparkResize;
    $(window).on("resize", function (e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();
   }, 1000);
});


  
