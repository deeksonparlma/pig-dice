//Player constructor//

function player(firstName,secondName){
  this.firstName=firstName;
  this.secondName=secondName;
}
var results=[];
var dice1=[1,2,3,4,5,6];
var dice2=[1,2,3,4,5,6];
function roll1(){
  var result1= dice1[Math.floor(Math.random() * 6)];
  var result2=dice2[Math.floor(Math.random() * 6)];
  var store1=results.push(result1);
  var store2=results.push(result2);
  for(var index=0;index<results.length;index+=1){
    console.log(results[index]+results[index+=1])
  }
}