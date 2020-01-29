   let str = `Hello world`;
   let letter = `l`;

        function letterCounter(str) {
            let counter = 0;
            for (let i = 0; i <= str.length; i++) {
                if (str[i] == letter) counter++; 
            }
            console.log(`Кол-во совпадений: ${counter}`);
        }
        letterCounter(str);