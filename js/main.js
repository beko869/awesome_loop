var finish =
  [
  [
    {
      typ: "ne",
      orientation: 1
    },
    {
      typ: "nes",
      orientation: 1
    },
    {
      typ: "ne",
      orientation: 2
    },
  ],
  [
    {
      typ: "ne",
      orientation: 0
    },
    {
      typ: "nes",
      orientation: 3
    },
    {
      typ: "ne",
      orientation: 3
    }
  ]
];



var randomizeFinish = function(finish){
  var game = finish;
  return game;
};

var game = randomizeFinish(finish);

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
    var i = $(this).find('.rowid').val();
    var j = $(this).find('.columnid').val();
    var elem = game[i][j];
    elem.orientation += 1;
    if(elem.orientation > 3)
      elem.orientation = 0;

    render(game);
  });
};

render(game);
// element "nesw"






