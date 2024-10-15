//definire il cilo for
//il ciclo for si ripeterà per 100 volte andando avanti sempre di 1 posto
//poniamo la condizione straordinaria come primo -if-
//scriviamo il resto delle condizioni "fizz" "buzz"
//tutto quello che non viene considerato dai primi if verrà mostrato senza nessuna descrizione



for (let i = 0; i<100; i++)  {
    const num = i +1
    if(num % 3== 0 && num%5==0){
        console.log(num,'FizzBuzz');
    }
    else if(check3 = num % 3 == 0){
        console.log(num, 'Fizz')
    }
    else if(check5 = num % 5 == 0){
        console.log(num,'Buzz' )
    }
    else{
        console.log(num)
    }
        
}
        


