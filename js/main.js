// Gibt eine Zufallszahl zwischen min (inklusive) und max (inklusive) zurück
// Die Verwendung von Math.round() erzeugt keine gleichmäßige Verteilung!

var stats = { level:0, score:0, end:true, last: null};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var randomizeFinish = function( finish ){
  var tmpGame = [];
  for(var i = 0; i < finish.length; i++){
	tmpGame[i] = [];
    for(var j = 0; j < finish[i].length; j++){
		var newObject = jQuery.extend({}, finish[i][j]);
		newObject.visible = true;
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

var game = null;

var spin = function(x){
	var i = x.find('.rowid').val();
    var j = x.find('.columnid').val();
    var elem = game[i][j];
	elem.visible = false;
	stats.last = {row: i, column: j};
    elem.orientation += 1;
	stats.score++;
	$('#spinCounter').html(stats.score);
	x.addClass('show');
    if(elem.orientation > 3){
      elem.orientation = 0;
      x.addClass('o00');
    }else{
      x.addClass('o' + elem.orientation);
    }
}

var render = function(){
  var html = '';
	
	if( stats.end ){
		if( stats.level != 0 ){
			html += '<div id="win">Sie haben das Spiel mit ' + stats.score + ' Spins gewonnen!!!!</div>'; 
		}
	
		html += '<div id="startGame" class="btn">Spiel starten</div>';
		
		$('#game').html(html);
		
		$('#startGame').unbind('click').on('click', function(e){
			stats.level = 0;
		
			game = randomizeFinish(finish[stats.level]);
			stats.level++;
			
			$('#levelCounter').html(stats.level);
			stats.end = false;
			render();
		});
		
	}
	else{
		 for(var i = 0; i < game.length; i++){
			html += '<div class="row">';
			for(var j = 0; j < game[i].length; j++){
			  var showstr = game[i][j].visible ? 'show' : 'hide'; 
			  if(stats.last){
				if(i == stats.last.row && j == stats.last.column){
					showstr = 'show';
				}	
			  }
				
			  html += '<div id="' + i + 'x' + j + '" class=" cell o' + game[i][j].orientation + ' ' + showstr + '">';
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
					if( checkFinish(finish[stats.level-1],game) ){
						if( finish.length > stats.level ){
							 game = randomizeFinish(finish[stats.level]);
							 stats.level++;
							 $('#levelCounter').html(stats.level);
						} else {
							//Spiel beendet
							stats.end = true;
							
							
						}
						
						render();
					}
			  }, 100);
			  //render(game);

		  });
	}
	
 
};

render(game);
// element "nesw"
