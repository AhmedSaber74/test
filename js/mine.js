
//  a+ "<br>" +"― Marilyn Monroe",f + "<br>"+"― Oscar Wilde" , c +"<br>"+ "― Frank Zappa" ,d+"<br>"+ "― Marcus Tullius Cicero " 
// var a = " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” "
// var f = " “Be yourself; everyone else is already taken.”  "
// var c = " “So many books, so little time.” "
// var d = " “A room without books is like a body without a soul.” "
var ourQute =[ 

{'author': 'Jim Rohn', 
'quote': 'Beware of what you become in pursuit of what you want.'
},
{'author': 'Epictetus', 
'quote': 'It\'s not what happens to you, but how you react to it that matters.'
},
{'author': 'Frank Sinatra', 
'quote': 'The best revenge is massive success.'
},
{'author': 'Wayne Gretzy', 
'quote': 'You miss 100% of the shots you don\'t take.'
},
{'author': 'Nelson Mandela', 
'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
},
{'author': 'Elbert Hubbard', 
'quote': 'Do not take life too seriously. You will not get out alive.'
},



];
var counter = Math.floor((Math.random()*ourQute.length))

function printRandom() {
   
    var randomcap = Math.floor(Math.random() * ourQute);
    document.getElementById("change").innerHTML=`\"${ourQute[counter].quote}\"`;
    document.getElementById("writer").innerHTML=`--${ourQute[counter].author}`;
    if (counter>=ourQute.length) {
        counter=0
    }


}




