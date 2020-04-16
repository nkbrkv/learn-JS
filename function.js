let arg = [1,2,3,4,5,6,7,8,9,10];
//declaration
        function amount(x, y, z=10) { return x + y * z; }; 
//expression
        let arrayFunc = function(x) {
            
                for (i=0; i <= arg.length; i++) { 
                    if (x == arg[i]) { 
                        console.log(`Значение ${x} входит в данный массив`);
                    } else {
                        console.log(arg[i]);
                    }
                }
             };
        console.log(amount(10, 5)); 
        arrayFunc(7);
