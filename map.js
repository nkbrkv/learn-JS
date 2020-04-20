
//1. створити три map-а у першому {'виробник':'назва продукту'}, у другому {'вартість':'виробник'}, у третьому {'час доставки':'виробник'}
var mapFirst = new Map(); 
//name
mapFirst.set('Apple',   'XS Max')
        .set('Samsung', 'Galaxy Z')
        .set('Xiaomi',  'Black Shark 2 Pro')
        .set('Huawei',  'P40 Pro')
  

var mapSecond = new Map(); 
//price
mapSecond.set('Apple'  , 1200)
         .set('Samsung', 1000)
         .set('Xiaomi' , 950)
         .set('Huawei' , 1100)


var mapThird = new Map();
//time
mapThird.set('Apple',   7)
        .set('Samsung', 5)
        .set('Xiaomi',  3)
        .set('Huawei',  4)
   
//2. вивести в об'єкт товар із найменшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
let lowPrice = function () {

            let a =  mapSecond.get('Apple'),
                b =  mapSecond.get('Samsung'),
                c =  mapSecond.get('Xiaomi'),
                d =  mapSecond.get('Huawei')

            if(a == Math.min(a, b, c, d)) {
                console.log(`${mapFirst.get("Apple")} / ${mapSecond.get("Apple")} / ${mapThird.get("Apple")}day`)
            }else if(b == Math.min(b, a, c, d)) {
                console.log(`${mapFirst.get("Samsung")} / ${mapSecond.get("Samsung")} / ${mapThird.get("Samsung")}day`)
            }else if(c == Math.min(a, b, c, d)) {
                console.log(`${mapFirst.get("Xiaomi")} / ${mapSecond.get("Xiaomi")} / ${mapThird.get("Xiaomi")}day`)
            }else if(d == Math.min(a, b, c, d)) {
                console.log(`${mapFirst.get("Huawei")} / ${mapSecond.get("Huawei")} / ${mapThird.get("Huawei")}day`)
            }
        
}

//3. вивести в об'єкт товар із найменшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}
let MaxPrice = function () {

            let a =  mapSecond.get('Apple'),
                b =  mapSecond.get('Samsung'),
                c =  mapSecond.get('Xiaomi'),
                d =  mapSecond.get('Huawei')

            if(a == Math.max(a, b, c, d)) {
                console.log(`${mapFirst.get("Apple")} / ${mapSecond.get("Apple")} / ${mapThird.get("Apple")}day`)
            }else if(b == Math.max(b, a, c, d)) {
                console.log(`${mapFirst.get("Samsung")} / ${mapSecond.get("Samsung")} / ${mapThird.get("Samsung")}day`)
            }else if(c == Math.max(a, b, c, d)) {
                console.log(`${mapFirst.get("Xiaomi")} / ${mapSecond.get("Xiaomi")} / ${mapThird.get("Xiaomi")}day`)
            }else if(d == Math.max(a, b, c, d)) {
                console.log(`${mapFirst.get("Huawei")} / ${mapSecond.get("Huawei")} / ${mapThird.get("Huawei")}day`)
            }
        
}
            
//4. вивести в об'єкт товар із найбільшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
let lowTimeDelivery = function() {
            let a =  mapThird.get('Apple'),
                b =  mapThird.get('Samsung'),
                c =  mapThird.get('Xiaomi'),
                d =  mapThird.get('Huawei')

            if(a == Math.min(a, b, c, d)) {
                console.log(`${mapFirst.get("Apple")} / ${mapSecond.get("Apple")} / ${mapThird.get("Apple")}day`)
            }else if(b == Math.min(b, a, c, d)) {
                console.log(`${mapFirst.get("Samsung")} / ${mapSecond.get("Samsung")} / ${mapThird.get("Samsung")}day`)
            }else if(c == Math.min(a, b, c, d)) {
                console.log(`${mapFirst.get("Xiaomi")} / ${mapSecond.get("Xiaomi")} / ${mapThird.get("Xiaomi")}day`)
            }else if(d == Math.min(a, b, c, d)) {
                console.log(`${mapFirst.get("Huawei")} / ${mapSecond.get("Huawei")} / ${mapThird.get("Huawei")}day`)
            }

}

//5. вивести в об'єкт товар із найбільшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}
let MaxTimeDelivery = function() {
            let a =  mapThird.get('Apple'),
                b =  mapThird.get('Samsung'),
                c =  mapThird.get('Xiaomi'),
                d =  mapThird.get('Huawei')

            if(a == Math.max(a, b, c, d)) {
                console.log(`${mapFirst.get("Apple")} / ${mapSecond.get("Apple")} / ${mapThird.get("Apple")}day`)
            }else if(b == Math.max(b, a, c, d)) {
                console.log(`${mapFirst.get("Samsung")} / ${mapSecond.get("Samsung")} / ${mapThird.get("Samsung")}day`)
            }else if(c == Math.max(a, b, c, d)) {
                console.log(`${mapFirst.get("Xiaomi")} / ${mapSecond.get("Xiaomi")} / ${mapThird.get("Xiaomi")}day`)
            }else if(d == Math.max(a, b, c, d)) {
                console.log(`${mapFirst.get("Huawei")} / ${mapSecond.get("Huawei")} / ${mapThird.get("Huawei")}day`)
            }

}
