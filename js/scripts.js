//Player constructor//

function player(firstName,secondName){
  this.firstName=firstName;
  this.secondName=secondName;
}

var dice1=[1,2,3,4,5,6];
var dice2=[1,2,3,4,5,6];
function roll1(){
  var result1= dice1[Math.floor(Math.random() * 6)];
  var result2=dice2[Math.floor(Math.random() * 6)];
  var store1=result1;
  var store2=result2;
}