var addScore = function(val1, val2, val3, val4) {
  return val1 + val2 + val3 + val4;
}

$(document).ready(function(){
  $('form#userInput').submit(function(event){
    event.preventDefault();
    var morning = parseInt($('input:radio[name=morningRadios]:checked').val());
    var danger = parseInt($('input:radio[name=troubleRadios]:checked').val());
    var peeps = parseInt($('input:radio[name=peepsRadios]:checked').val());
    var fellowship = parseInt($('input:radio[name=fellowRadios]:checked').val());
    var finalScore
    finalScore = addScore(morning, danger, peeps, fellowship);
    if (finalScore <= 7) {
      $('div.noshow').slideUp();
      $('div#baggins').slideDown();
    } else if (finalScore >= 8 && finalScore <= 11){
      $('div.noshow').slideUp();
      $('div#gamgee').slideDown();
    } else if (finalScore >= 12 && finalScore <= 15){
      $('div.noshow').slideUp();
      $('div#took').slideDown();
    } else if (finalScore >= 16) {
      $('div.noshow').slideUp();
      $('div#brandybuck').slideDown();
    }
  });

});
