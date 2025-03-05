var arr_coin1 = Array();
var arr_coin2 = Array();
var arr_coin3 = Array();
var arr_coin4 = Array();
var arr_coin5 = Array();

const listCoins = [
    ['USD', []],
    ['EUR', []],
    ['BTC', []],
    ['ETH', []],
    ['GBP', []]
]

function req2() {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,GBP-BRL").then(response => response.json())
    .then(data => {
        document.getElementById('value-coin1').innerHTML = 'R$ '+data.USDBRL.bid;
        document.getElementById('value-coin2').innerHTML = 'R$ '+data.EURBRL.bid;
        document.getElementById('value-coin3').innerHTML = 'R$ '+data.BTCBRL.bid;
        document.getElementById('value-coin4').innerHTML = 'R$ '+data.ETHBRL.bid;
        document.getElementById('value-coin5').innerHTML = 'R$ '+data.GBPBRL.bid;
    })   

    for (let i = 0; i < listCoins.length; i++) {
        const coin = listCoins[i];
        fetch(`https://economia.awesomeapi.com.br/json/daily/${coin[0]}-BRL/8`).then(response => response.json())
        .then(
            data => {
                for (let index = 0; index < data.length; index++) {
                    //const element = array[index];
                    coin[1].push(data[index].bid)
                }
            }
        )

    }

}

req2();


$(function () {
    "use strict";

   setTimeout(() => {
    var sparklineLogin = function () {
        $('#sparklinedash').sparkline(listCoins[0][1].slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#7ace4c'
        });
        $('#sparklinedash2').sparkline(listCoins[1][1].slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#7460ee'
        });
        $('#sparklinedash3').sparkline(listCoins[2][1].slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#ffc107'
        });
        $('#sparklinedash4').sparkline(listCoins[3][1].slice(0).reverse(), {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#1f36b7'
        });
        $('#sparklinedash5').sparkline(listCoins[4][1].slice(0).reverse(), {
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
