let msg1 =document.querySelector(".msg1 ");
let msg2 =document.querySelector(".msg2 ");
let msg3 =document.querySelector(".msg3 ");
let div=document.querySelector(".change");
let chance =10;
let Guessed_num= [];
let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer);

 play = () => {
  let user_gusses = Number(document.getElementById("userGues").value);
  if(user_gusses < 1 || user_gusses >50){
alert("Please Enter Number between 1 to 50");
  }
else{
    if(user_gusses > answer){
        div.classList.add("wrong");
        msg1.textContent="Your Number is too height";
        chance--;
        msg2.textContent="Number of Change to play is  : " + chance;
        Guessed_num.push(user_gusses);
        msg3.textContent="Guessed Number : " + Guessed_num ;
        document.getElementById("userGues").value = " ";
        
       


    } else if( user_gusses === answer){
        div.classList.add("true");
        msg1.textContent="Conguration.... you won bro!";
        restart();
       

    }
    else{
        div.classList.add("wrong");

        msg1.textContent="Your Number is too Low"
        chance--;
        msg2.textContent="Number of Change to play is  : " + chance;
        Guessed_num.push(user_gusses);
        msg3.textContent="Guessed Number : " + Guessed_num ;
        document.getElementById("userGues").value = " ";
        
    }
   if (chance === 0)
   {
    document.querySelector(".play1").disabled= true;
    alert("Your Change is empty!Press OK to restart");
    restart();
   }
}
 }

 restart = () => {
    document.querySelector(".play1").disabled= false;
    chance =10;
    Guessed_num= [];
    msg3.textContent="Guessed Number : " + Guessed_num ;
    msg2.textContent="Number of Change to play is  : " + chance;
    document.getElementById("userGues").value = " ";
 }

