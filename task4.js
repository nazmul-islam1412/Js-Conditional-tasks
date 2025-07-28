let myNum=90;
let friendsNum=60;

if (myNum>80){
    if(friendsNum>80){
        console.log("Both are going for a lunch");
    }
    else  if(friendsNum<=80 && friendsNum>=60){
        console.log("Good luck next time");
    }
    else if(friendsNum<60 && friendsNum>=40){
        console.log("Don,t seen his massage");
    }
    else  if(friendsNum<40){
        console.log("Block him");
    }

}
else{
    console.log("Going to home and sleep and act sad");
}