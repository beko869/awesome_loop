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
			
			if(game[i][j].orientation != finish[i][j].orientation){
				return false;
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
    if(elem.orientation > 3)
      elem.orientation = 0;
}

var render = function(game){
  var html = '';
  
  for(var i = 0; i < game.length; i++){
    html += '<div class="row">';
    for(var j = 0; j < game[i].length; j++){
      html += '<div class="cell">'
      html += '<input type="hidden" value="' + i + '" class="rowid" />';
      html += '<input type="hidden" value="' + j + '" class="columnid" />';
      html += '<img class="o' + game[i][j].orientation + '" src="./img/' + game[i][j].typ + '.png"/></div>';
    }
      html += '</div>';
  }
  
  $('#game').html(html);
  
  $('#game .cell').on('click', function(e){
	  spin($(this));
	  render(game);
	  
	  if( checkFinish(finish,game) ){
		alert('Gewonnen :)');
		
	  }
  });
};

render(game);
// element "nesw"







