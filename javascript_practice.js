 
//  fundamental javascript***
 
var number1=25;
var number2='25.5';
number2=parseFloat(number2);
console.log(number1+number2);

var lucky=Math.random()*6;
var lottery=Math.round(lucky);
console.log(lottery);

var date=new Date();
console.log(date);

// Array****

var friendsAge=[12,25,13,14,17,18,19];
console.log(friendsAge);
friendsAge[3]=28;
var position=friendsAge.indexOf(19);
console.log(position);
friendsAge.push(10);
console.log(friendsAge.length);

// while loop*****

var num=0;
while(num<15){
   console.log(num);
   num++;
   
}

for(var i=0;i<10;i++){
   console.log(i);

}

var num=[20,30,40,50,60,70,80];
for (let i = 0; i <num.length; i++) {
   const element = num[i];
   console.log(element);
   
}

// switch case****

var num=100;
switch(num){
   case 1000:
       console.log("I am 1000");
       break;
       case 100:
           console.log(" i am 100");
           break;
           case 50:
               console.log("i am 50");
               break;
               case 40:
                   console.log("i am 40");
                   break;
                   default:
                       console.log("i don't know who am i?");
}

// function****

function sayBaby(){
   console.log("jan o baby");
   console.log("sonar moina pakhi");
}
sayBaby();
var hang="H2O";
sayBaby();
var ami="jabona";
sayBaby();

// Function parameter
function doubleIt(num){
   var result=num*2;
   console.log(result);
}
doubleIt(5);

function doubleIt(num){
   var result=num*2;
   return result;
}
var first=doubleIt(5);
var second=doubleIt(50);
var total=first+second;
console.log(total);

// multiple parameter****

function add(num1,num2){
   var result=num1+num2;
   return result;
}
var sum=add(15,16);
console.log(sum);

// javascript object****

var student={id:18103045,phone:16208639,name:"Tareq"};
var student1={id:1780365,phone:505086,name:"mahi"};
// finding phone number different way
var phoneProName ="phone";
var phoneNo1=student.phone;
var phoneNo2=student["phone"];
var phoneNo3=student[ phoneProName];
// change phone number
student1.phone=26263;
// update new things
student1.cinema="Agni2";
console.log(phoneNo1);
console.log(student1);
