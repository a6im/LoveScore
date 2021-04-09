
$(".btn").click(function() {
    prompt("what is your name?");
    prompt("What is their name?");
    var loveScore=Math.random()*100;
    loveScore=Math.floor(loveScore)+1;
    var State;
    if(loveScore<50){
        state="I'm Sorry .";
    }else if(50<=loveScore && loveScore<80){
        state="Good for you.";
    }else{
        state="You are so lucky.";
    }
    alert("Your Love Score is "+ loveScore +"%. " +state);
    
  });