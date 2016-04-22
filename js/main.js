var randomizeFinish = function(finish){
  var game = finish;
  return game;
};

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
  });
};

render(game);
// element "nesw"






