//Player constructor//

function player(firstName,secondName){
  this.firstName=firstName;
  this.secondName=secondName;
}
var results=[0];
var res1=[0];
var res2=[0];
var dice1=[1,2,3,4,5,6];
var dice2=[1,2,3,4,5,6];
function roll1(){
  var result1= dice1[Math.floor(Math.random() * 6)];
  var result2=dice2[Math.floor(Math.random() * 6)];
  var store1=res1.unshift(result1);
  var store2=res2.unshift(result2);
  var store3=results.unshift(result1);
  var store4=results.unshift(result2);
  console.log(result1);
  console.log(result2);
  
}
function check(){ 
  var checkNow=results.includes(1);
if(checkNow===true){
  var sent=results.unshift(0);
}
else{
  for(var index=0;index<=results.length;index+=1){
    var total=start[0];
    return res1[index]+res2[index];
  }
} 
console.log(results[0]);
}
function clear(){
  console.log(results.length=0);
}
