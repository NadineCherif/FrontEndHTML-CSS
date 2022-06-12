var counter= 0
console.log(counter);
//ajputer +1 counter
//counter += 1 

//counter ++ 
//console.log(counter);

//counter = counter-1
//counter -=1
//counter -- 
//console.log(counter);

//document.write("<h1>counter</h1>") //result counter
//document.write(counter) //result 0 
//document.write("<h1>La valeur de notre compteur est : " + counter + "</h1>");
var value= document.getElementById("counter").innerHTML='la valeur de notre compteur est : ' + counter;

var btn1= document.querySelector('#btn1')
btn1.addEventListener('click' , function(event){
        counter++
        //console.log(counter); yaffichili f console
        //reacrésée
        document.getElementById("counter").innerHTML='la valeur de notre compteur est : ' + counter;
})

var btn2 = document.querySelector('#btn2')
btn2.addEventListener('click' , function(event){
            counter--
            if (counter < 0){ // l negatif inahihomli 
                      counter = 0 ;
            }
            document.getElementById("counter").innerHTML='la valeur de notre compteur est : ' + counter;
})

var btn3 = document.querySelector('#btn3')
 btn3.addEventListener('click', function(){
     counter=0
                 document.getElementById("counter").innerHTML='la valeur de notre compteur est : ' + counter;

 })
