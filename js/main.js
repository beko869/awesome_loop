// Gibt eine Zufallszahl zwischen min (inklusive) und max (inklusive) zurück
// Die Verwendung von Math.round() erzeugt keine gleichmäßige Verteilung!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var randomizeFinish = function( finish ){
  var tmpGame = [];
  for(var i = 0; i < finish.length; i++){
	tmpGame[i] = [];
    for(var j = 0; j < finish[i].length; j++){
		var newObject = jQuery.extend({}, finish[i][j]);
		newObject.orientation = getRandomInt(0,3);
		tmpGame[i][j] = newObject;
    }
  }
  return tmpGame;
};

var checkFinish = function( finish,game ){

  for(var i = 0; i < game.length; i++){
    for(var j = 0; j < game[i].length; j++){
      console.log( game[i][j].orientation, finish[i][j].orientation )
      if(game[i][j].typ != 'nesw'){//wenn nesw immer richtig
        if(game[i][j].typ != 'ns'){
          if(game[i][j].orientation != finish[i][j].orientation){
            return false;
          }
        }else{//wenn ns immer 2 richtig
          if((game[i][j].orientation % 2) != finish[i][j].orientation){
            return false;
          }
        }
      }
    }
  }

  return true;
}

var game = randomizeFinish(finish);

var spin = function(x){
  var i = x.find('.rowid').val();
    var j = x.find('.columnid').val();
    var elem = game[i][j];
    elem.orientation += 1;
    if(elem.orientation > 3){
      elem.orientation = 0;
      x.addClass('o00');
    }else{
      x.addClass('o' + elem.orientation);
    }
}

var render = function(game){
  var html = '';

  for(var i = 0; i < game.length; i++){
    html += '<div class="row">';
    for(var j = 0; j < game[i].length; j++){
      html += '<div id="' + i + 'x' + j + '" class=" cell o' + game[i][j].orientation + '">';
      html += '<input type="hidden" value="' + i + '" class="rowid" />';
      html += '<input type="hidden" value="' + j + '" class="columnid" />';
      html += '<img src="./img/' + game[i][j].typ + '.png"/></div>';
    }
      html += '</div>';
  }

  $('#game').html(html);

    $('#game .cell').unbind('click').on('click', function(e){
      $('#game .cell').unbind('click');
      spin($(this));
      setTimeout(function(){
          render(game);
	        if( checkFinish(finish,game) ){
		          alert('Gewonnen :)');

	        }
      }, 100);
	  //render(game);

  });
};

render(game);
// element "nesw"
