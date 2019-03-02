  //Player constructor//

  function player(firstName,secondName){
    this.firstName=firstName;
    this.secondName=secondName;
  }
  var result=[];
  var liveScores=[0];
  var totals=[0,0];
  var dice1=[1,2,3,4,5,6];
  var dice2=[1,2,3,4,5,6];

  //player one//

  function roll1(){
    var result1=result.unshift(dice1[Math.floor(Math.random() * 6)]);
    var result2=result.unshift(dice2[Math.floor(Math.random() * 6)]);
    var rollNumbers=result;
    document.getElementById("playerRolls").innerHTML=rollNumbers;
  }
  function check(){
    var fail=0;
    var checkNow=result.includes(1);
       if(checkNow===false){
        for (var i = 0, sum = 0; i < result.length;
          totals.unshift(sum += result[i++]));
          document.getElementById("playerScore").innerHTML=totals[0]+ 0;
          document.getElementById("playerLiveScore").innerHTML=totals[0];
          liveScores.unshift(totals[0]);
  }
  else{
    totals.unshift(fail);
    document.getElementById("playerScore").innerHTML=totals[0];
    document.getElementById("playerLiveScore").innerHTML=totals[0] + totals[2];
    }
  }
  function clear(){
    document.getElementById("playerRolls").innerHTML=result[lastindex];
  }
