//definire il ciclo for
//il ciclo for si ripeterà per 100 volte andando avanti sempre di 1 posto
//poniamo la condizione straordinaria come primo -if-, se entrambi i risultati sono identici nella stessa posizione di i allora la condizione si attiva
//scriviamo il resto delle condizioni "fizz" "buzz". per "fizz" se il modulo di 3 è uguale a 0 e per "buzz" se il modulo di 5 è uguale a 0
//tutto quello che non viene considerato dai primi if verrà mostrato senza nessuna descrizione



for (let i = 0; i<100; i++)  {
    const num = i +1
    if(num % 3 == 0 && num % 5== 0){
        console.log(num,'FizzBuzz');
    }
    else if(num % 3 == 0){
        console.log(num, 'Fizz')
    }
    else if(num % 5 == 0){
        console.log(num,'Buzz')
    }
    else{
        console.log(num)
    }
        
}
        


