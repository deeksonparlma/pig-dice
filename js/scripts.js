//Player constructor//

function player(firstName,secondName){
  this.firstName=firstName;
  this.secondName=secondName;
}
var result=[];
var results2=[];
var liveScores=[0];
var totals=[0,0];
var totals2=[0,0];
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
  $("#attempt1").hide();
  $("#sum1").hide();
  var fail=0;
  var checkNow=result.includes(1);
     if(checkNow===false){
      for (var i = 0, sum = 0; i < result.length;
        totals.unshift(sum += result[i++]));
        document.getElementById("playerScore").innerHTML=totals[0];
        document.getElementById("playerLiveScore").innerHTML=totals[0];
        liveScores.unshift(totals[0]);
        if (totals[0] >=100) {
          $("#conquest").append("You Won");
          $("#conquest").slideDown(1000);
        }
}
else{
  $("#attempt1").hide();
  $("#sum1").hide();
  result.forEach(function(res){
    var index = result.indexOf(1);

      if (~index) {
    result[index] = 0;
  }
  });
  document.getElementById("playerScore").innerHTML=totals[0];
  document.getElementById("playerLiveScore").innerHTML=totals[0];
  }
}
function clear(){
  result.forEach(function(res){
    var index = result.indexOf(1);

      if (~index) {
    result[index] = 0;
  }
  });
}

//player two//

function roll2(){
  var result3=results2.unshift(dice1[Math.floor(Math.random() * 6)]);
  var result4=results2.unshift(dice2[Math.floor(Math.random() * 6)]);
  var rollNumbers2=results2;
  document.getElementById("playerRolls2").innerHTML=rollNumbers2;
}
function checkk(){
  $("#attempt2").hide();
  $("#sum2").hide();
  var fail=0;
  var checkNow=results2.includes(1);
     if(checkNow===false){
      for (var i = 0, sum = 0; i < results2.length;
        totals2.unshift(sum += results2[i++]));
        document.getElementById("playerScore2").innerHTML=totals2[0];
        liveScores.unshift(totals2[0]);
        var store=totals2[0] ;
        document.getElementById("playerLiveScore2").innerHTML=store;
        if (totals2[0] >=100) {
          $("#conquest").append("You Won");
          $("#conquest").slideDown(1000);
        }

}
else{
  $("#attempt2").hide();
  $("#sum2").hide();
  results2.forEach(function(res){
    var index = results2.indexOf(1);

      if (~index) {
    results2[index] = 0;
  }
  });
  document.getElementById("playerScore2").innerHTML=totals2[0];
  document.getElementById("playerLiveScore2").innerHTML=totals2[0];
  }
}
function clear2(){

}

$(document).ready(function(){
  $("form#playerDetails").submit(function(event){
    event.preventDefault();
    var firstN=$("#firstPlayerName").val();
    var secondN=$("#secondPlayerName").val();
    $("#playerOne").text(firstN);
    $("#playerTwo").text(secondN);
    $("#gif").slideUp(500);
    $("#pp1").slideDown(500);
    $("#play1").slideDown(400);
    $("#playerDetails").hide();

    //prototypes for players//
    var p1=new player(firstN,secondN);
    $("#conquest").append( p1.firstName +" "+"You're playing against"+" "+ p1.secondName);
    $("#conquest").slideDown(1000);

  });
  $("#trans1").click(function(){
    $("#play1").slideUp(200);
    $("#play2").slideDown(200);
    $("#pp2").slideDown(800);
    $("#pp1").slideUp(800);
    $("#secplayer").slideDown();
    $("#roller1").hide();
    $("#attempt2").show();
    $("#sum2").show();
  });
  $("#trans2").click(function(){
    $("#pp2").slideUp(200);
    $("#pp1").slideDown(800);
    $(".secplayer").slideUp(200);
    $("#play1").slideDown(400);
    $("#play2").slideUp(400);
    $(".fistPlayer").slideDown(400);
    $("#attempt1").show();
    $("#sum1").show();
  });
});
