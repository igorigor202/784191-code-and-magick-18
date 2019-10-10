
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP_X = 22;
var TEXT_GAP_Y = 30;
var WIDTH_BAR = 40;
var DISTANCE_BETWEEN_BAR = 50;
var MAX_HEIGHT = 150;
var USER_NAME = 'Вы';
var RED_COLOR = 'rgba(255, 0, 0, 1)';
var YMAX = 90;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var renderText = function(ctx, x, y, text, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y)
};


var getMaxNumber = function(arr) {
  var result = arr[0];
  for (var i = 1; i < arr.length; i += 1) {
    var currentNumber = arr[i];
    if (currentNumber > result) {
      result = currentNumber;
    }
  }
  return result;
};



 var getRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};



var getRandomColor = function () {
  var saturate = getRandomNumber(0, 100);
  return 'hsl(240, ' + saturate + '%, 50%';
};

var getBarHeight = function (maxHeight, maxTime, time) {
  var currentBarHeight = maxHeight * time / maxTime;
  return currentBarHeight;
};

var renderBar = function (ctx, color, name, time, x, y, width, height, gap) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  var timeCoordY = y - gap;
  var nameCoordY = y + 2 * gap + height;
  ctx.fillStyle = 'black';
  ctx.fillText(name, x, nameCoordY);
  ctx.fillText(Math.floor(time), x, timeCoordY);
};


var renderBars = function (ctx, names, times) {
  for (var i = 0; i < names.length; i += 1) {
    var currentX = 2 * TEXT_GAP_X + CLOUD_X + i * (DISTANCE_BETWEEN_BAR + WIDTH_BAR);
    var currentBarHeight = getBarHeight(MAX_HEIGHT, getMaxNumber(times), times[i]);

    var currentPlayer = names[i];

    var currentColor = currentPlayer === USER_NAME ? RED_COLOR : getRandomColor();
    console.log(currentColor);
    renderBar(ctx, currentColor, names[i], times[i], currentX, CLOUD_Y + YMAX + (MAX_HEIGHT - currentBarHeight), WIDTH_BAR, currentBarHeight, GAP);

  }
};


 window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  renderText(ctx, CLOUD_X + TEXT_GAP_X, CLOUD_Y +  TEXT_GAP_Y, 'Ура вы победили!', 'black', '16px PT Mono');
  renderText(ctx, CLOUD_X + TEXT_GAP_X, CLOUD_Y + 1.5 * TEXT_GAP_Y, 'Список результатов:', 'black', '16px PT Mono');
  renderBars(ctx, names, times);
};



  //ctx.fillStyle = 'black';
  //ctx.font = '16px PT Mono';
  //ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP_X, CLOUD_Y +  TEXT_GAP_Y);
  //ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP_X, CLOUD_Y + 1.5 * TEXT_GAP_Y);
//
  //ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  //ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X, CLOUD_Y + 14 * GAP, WIDTH_BAR, (MAX_HEIGHT / 100) * 67);
  //ctx.fillStyle = 'black';
  //ctx.fillText('Вы', CLOUD_X + 2 * TEXT_GAP_X, CLOUD_Y + 26 * GAP);
  //ctx.fillStyle = 'black';
  //ctx.fillText('2725', CLOUD_X + 2 * TEXT_GAP_X, CLOUD_Y + 13 * GAP);
//
//
  //ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  //ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X + WIDTH_BAR + DISTANCE_BETWEEN_BAR, CLOUD_Y + 9 * GAP, WIDTH_BAR, MAX_HEIGHT);
  //ctx.fillStyle = 'black';
  //ctx.fillText('Кекс', CLOUD_X + 2 * TEXT_GAP_X + WIDTH_BAR + DISTANCE_BETWEEN_BAR, CLOUD_Y + 26 * GAP);
  //ctx.fillStyle = 'black';
  //ctx.fillText('4025', CLOUD_X + 2 * TEXT_GAP_X + WIDTH_BAR + DISTANCE_BETWEEN_BAR, CLOUD_Y + 8 * GAP);
//
//
  //ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  //ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X + 2 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 19.3 * GAP, WIDTH_BAR, (MAX_HEIGHT/100) * 31);
  //ctx.fillStyle = 'black';
  //ctx.fillText('Катя', CLOUD_X + 2 * TEXT_GAP_X + 2 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 26 * GAP);
  //ctx.fillStyle = 'black';
  //ctx.fillText('1244', CLOUD_X + 2 * TEXT_GAP_X + 2  * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 18 * GAP);
//
//
  //ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  //ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X + 3 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 19 * GAP, WIDTH_BAR, (MAX_HEIGHT/100) * 32);
  //ctx.fillStyle = 'black';
  //ctx.fillText('Игорь', CLOUD_X + 2 * TEXT_GAP_X + 3 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 26 * GAP);
  //ctx.fillStyle = 'black';
  //ctx.fillText('1339', CLOUD_X + 2 * TEXT_GAP_X + 3 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 18 * GAP);
//


  /*var renderStatistics = function(ctx, names, times){

  //черный прямоугольник
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 10, 420, 270);

  //белый прямоугольник
  ctx.strokeStyle = 'black';
  ctx.strokeRect(90, 0, 200, 140);
  ctx.fillStyle = 'white';
  ctx.fillRect(90, 0, 200, 140);

  //Текст победителя
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 100, 24);
  ctx.fillText('Список результатов:', 100, 40);

  //Прямоугольники участников
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(115, 80, 20, 40);

  ctx.fillStyle = 'blue';
  ctx.fillRect(165, 65, 20, 55);

  ctx.fillStyle = 'blue';
  ctx.fillRect(215, 100, 20, 20);

  ctx.fillStyle = 'blue';
  ctx.fillRect(265, 95, 20, 25);

  //имена участников и результаты
  ctx.fillStyle = 'black';
  ctx.font = '10px PT Mono';
  ctx.fillText('Вы', 115, 130);
  ctx.fillText('Кекс', 165, 130);
  ctx.fillText('Катя', 215, 130);
  ctx.fillText('Игорь', 265, 130);

  ctx.fillText('2725', 115, 75);
  ctx.fillText('4025', 165, 60);
  ctx.fillText('1244', 215, 95);
  ctx.fillText('1339', 265, 90);
  };
};



//ctx.fillStyle = 'black';
//ctx.font = '16px PT Mono';
//ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP_X, CLOUD_Y +  TEXT_GAP_Y);
//ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP_X, CLOUD_Y + 1.5 * TEXT_GAP_Y);
//
//ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X, CLOUD_Y + 14 * GAP, WIDTH_BAR, (MAX_HEIGHT / 100) * 67);
//ctx.fillStyle = 'black';
//ctx.fillText('Вы', CLOUD_X + 2 * TEXT_GAP_X, CLOUD_Y + 26 * GAP);
//ctx.fillStyle = 'black';
//ctx.fillText('2725', CLOUD_X + 2 * TEXT_GAP_X, CLOUD_Y + 13 * GAP);
//
//
//ctx.fillStyle = 'rgba(0, 0, 255, 1)';
//ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X + WIDTH_BAR + DISTANCE_BETWEEN_BAR, CLOUD_Y + 9 * GAP, WIDTH_BAR, MAX_HEIGHT);
//ctx.fillStyle = 'black';
//ctx.fillText('Кекс', CLOUD_X + 2 * TEXT_GAP_X + WIDTH_BAR + DISTANCE_BETWEEN_BAR, CLOUD_Y + 26 * GAP);
//ctx.fillStyle = 'black';
//ctx.fillText('4025', CLOUD_X + 2 * TEXT_GAP_X + WIDTH_BAR + DISTANCE_BETWEEN_BAR, CLOUD_Y + 8 * GAP);
//
//
//ctx.fillStyle = 'rgba(0, 0, 255, 1)';
//ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X + 2 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 19.3 * GAP, WIDTH_BAR, (MAX_HEIGHT/100) * 31);
//ctx.fillStyle = 'black';
//ctx.fillText('Катя', CLOUD_X + 2 * TEXT_GAP_X + 2 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 26 * GAP);
//ctx.fillStyle = 'black';
//ctx.fillText('1244', CLOUD_X + 2 * TEXT_GAP_X + 2  * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 18 * GAP);
//
//
//ctx.fillStyle = 'rgba(0, 0, 255, 1)';
//ctx.fillRect(CLOUD_X + 2 * TEXT_GAP_X + 3 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 19 * GAP, WIDTH_BAR, (MAX_HEIGHT/100) * 32);
//ctx.fillStyle = 'black';
//ctx.fillText('Игорь', CLOUD_X + 2 * TEXT_GAP_X + 3 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 26 * GAP);
//ctx.fillStyle = 'black';
//ctx.fillText('1339', CLOUD_X + 2 * TEXT_GAP_X + 3 * (WIDTH_BAR + DISTANCE_BETWEEN_BAR), CLOUD_Y + 18 * GAP);
//
//
//};

/*var renderStatistics = function(ctx, names, times){

//черный прямоугольник
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
ctx.fillRect(100, 10, 420, 270);

//белый прямоугольник
ctx.strokeStyle = 'black';
ctx.strokeRect(90, 0, 200, 140);
ctx.fillStyle = 'white';
ctx.fillRect(90, 0, 200, 140);

//Текст победителя
ctx.fillStyle = 'black';
ctx.font = '16px PT Mono';
ctx.fillText('Ура вы победили!', 100, 24);
ctx.fillText('Список результатов:', 100, 40);

//Прямоугольники участников
ctx.fillStyle = 'rgba(255, 0, 0, 1)';
ctx.fillRect(115, 80, 20, 40);

ctx.fillStyle = 'blue';
ctx.fillRect(165, 65, 20, 55);

ctx.fillStyle = 'blue';
ctx.fillRect(215, 100, 20, 20);

ctx.fillStyle = 'blue';
ctx.fillRect(265, 95, 20, 25);

//имена участников и результаты
ctx.fillStyle = 'black';
ctx.font = '10px PT Mono';
ctx.fillText('Вы', 115, 130);
ctx.fillText('Кекс', 165, 130);
ctx.fillText('Катя', 215, 130);
ctx.fillText('Игорь', 265, 130);

ctx.fillText('2725', 115, 75);
ctx.fillText('4025', 165, 60);
ctx.fillText('1244', 215, 95);
ctx.fillText('1339', 265, 90);
};
renderStatistics(ctx, names, times); */
