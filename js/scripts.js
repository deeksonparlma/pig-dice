  //Player constructor//

  function player(firstName,secondName){
    this.firstName=firstName;
    this.secondName=secondName;
  }
  var result=[];
  
  var dice1=[1,2,3,4,5,6];
  var dice2=[1,2,3,4,5,6];

  //player one//

  function roll1(){
    var result1=result.push(dice1[Math.floor(Math.random() * 6)]);
    var result2=result.push(dice2[Math.floor(Math.random() * 6)]);
    console.log(result)
  }
  function check(){ 
    var checkNow=result.includes(1);
       if(checkNow===true){
        for (var i = 0, sum = 0; i < result.length; console.log(0));
  }
  else{
    
    for (var i = 0, sum = 0; i < result.length; console.log(sum += result[i++]));
}
  }
  function clear(){
    console.log(results.length=0);
  }
  function addUp(){
    alert(sumStorage[0]+sumStorage[1])
  }