var count = 0;
var mess = ""
var output=true;
function read() {
     if(output)
     {
     count = count + 1;
    }
     output=false;
    console.log(count);
    if(count==1)
    {

   	 console.log("stuff "+mess);
   	 if((mess.indexOf("look")!=-1||mess.indexOf("see")!=-1||mess.indexOf("explore")!=-1))
   	 {
   		 output=true;
   		 // console.log("yes inputted");
   		 document.getElementById('log').innerHTML += '<br> You look around and find that you are in a spaceship that looks like it is headed to Europa. In front of you, you see a spacesuit and a door that says: escape shuttle. What do you choose to do?';
   		 document.body.style.backgroundImage=("url(http://fusionflight.com/wp-content/uploads/2014/08/Earth-From-Space-Space-1080x1920.jpg)");
   		 document.body.style.backgroundImage=("url(http://fc04.deviantart.net/fs71/i/2013/153/5/4/fuse_soviet_space_station_by_meckanicalmind-d67k8op.jpg)");
   	 }
    }
    if(count==2)
    {
   	 if(mess.indexOf("shuttle")!=-1||mess.indexOf("escape")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You enter the escape shuttle. You see a big red button, and a communications display that is turned off';
   	 }
   	 if(mess.indexOf("suit")!=-1||mess.indexOf("spacesuit")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You pick up and get in to the spacesuit. It looks like it has a hole in it. There is a door leading outside, and a door leading to the main deck';
   	 }

    }
    if(count==3)
    {
   	 if(mess.indexOf(" button ")!=-1||mess.indexOf(" red ")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You press the red button. A bight flash of light fills your view. You die. \n You look around and find that you are in a spaceship that is about to crash in to Europa. In front of you, you see a spacesuit and a door that says: escape shuttle. What do you choose to do?';
   		 count=1;
   		 console.log("button:" +count);
   	 }
   	 if(mess.indexOf(" on ")!=-1||mess.indexOf("communications")!=-1||mess.indexOf("communicator")!=-1||mess.indexOf("device")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You turn the display on and a robot states: push the red button NOW! You turn around and slowly see the door closing. You are unsure of the robot\'s intentions. Do you try to leave or press the button??';
   		 counter=2;
   	 }
   	 if(mess.indexOf("outside")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> A bight flash of light fills your view. You die';
   		 counter=0;
   	 }
   	 if(mess.indexOf("main")!=-1||mess.indexOf("deck")!=-1||mess.indexOf("maindeck")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You enter the main deck. You look around and see skeletons (but they are neither spooky or scary), you look on the main control center and see a big red button and a communication device';
   		 count=2;
   	 }


    }
    if(count==4)
    {
   	 if(mess.indexOf("leave")!=-1||mess.indexOf("escape")!=-1||mess.indexOf("out")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You barely escape. Sirens are going off. Do you run to run up the stairs to an unknown room, or down the stairs in to the space-pool?';
   		 //count=2;
   	 }
    }
    if(count==5)
    {
   	 if(mess.indexOf("pool")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You drown because you do not know how to swim. You look around and find that you are in a spaceship that is about to crash in to Europa. In front of you, you see a spacesuit and a door that says: escape shuttle. What do you choose to do?';
   		 count=1;
   	 }
   	 if(mess.indexOf("up")!=-1||mess.indexOf("unknown")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You sprint up the stairs. You hear something chasing after you. Get to the core of the ship and find and see a monsterous robot in front of you. Do you punch the robot or try to out run it.';
   		 //count=2;
   	 }
    }
    if(count==6)
    {
   	 if(mess.indexOf("punch")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You punch the robot, the mirror breaks, YOU. ARE. THE. ROBOT.';
   		 //count=2;
   	 }
   	 if(mess.indexOf("run")!=-1)
   	 {
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> As you are running, you see a knife and a robot communicator/translator. You are only flexible enough to reach one.';
   		 //count=2;
   	 }
    }
    if(count==7)
    {
    if(mess.indexOf("communicator")!=-1||mess.indexOf("translator")!=-1)
   	 {    
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You speak in to the translator. Suddently the unrecognizable noises that come out of the translator triggers a flood of memories. You realize that the robot has killed the rest of the crew. You realize that you need to kill the robot. But you do not know how... You keep running until you find the boiler room. You can either rip a pipe out and hit the thing chasing you, or try to jam all the pipes and blow up the ship.';
   		 //count=2;
   	 }
   	 if(mess.indexOf("knife")!=-1)
   	 {    
   		 output=true;
   		 document.getElementById('log').innerHTML += '<br> You reach out and stab the thing chasing you. You hear a muffled scream. The robot rips off its face and reavals that it is really an exoskeleton with a person inside! He mutters, well, youve done it, you have killed every last one of us. You then realize that you are the monster, you are THE ROBOT';
   		 //count=2;
   	 }
    }

    if(count==8)
{
    if(mess.indexOf("jam")!=-1)
    {
   	 output=true;
   	 document.getElementById('log').innerHTML += '<br> You jam the whole ship, you blow up with the monster on board! Earth is saved!';
    }
    if(mess.indexOf("rip")!=-1)
    {
   	 output=true;
   	 document.getElementById('log').innerHTML += '<br> You rip the pipe out and a burst of steam rushes out. Your vision suddenly begins to become fuzzy. Weird artifacts cloud your view. You reach up to wipe your eyes but find that you are not there. But how? Your vision suddently cuts out to a blue error screen. YOU. ARE. THE. ROBOT. ';    
    }
}

    if(!output)
    {
   	 document.getElementById('log').innerHTML += '<br> unrecognized command. Oxygen level has been reduced by 1 ';
    }
    console.log("button2:" +count);
    //document.write(mess);
    // document.write(count);
}

$(document).ready(function() {
    $('.einput').click(function(event) {
   	 event.preventDefault();
   	 console.log(document.getElementById("userInput").value);
   	 mess=document.getElementById("userInput").value;
   	 read();
    });

});

