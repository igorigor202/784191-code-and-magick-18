'use strict';

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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, text, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

var getMaxNumber = function (arr) {
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

    renderBar(ctx, currentColor, names[i], times[i], currentX, CLOUD_Y + YMAX + (MAX_HEIGHT - currentBarHeight), WIDTH_BAR, currentBarHeight, GAP);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  renderText(ctx, CLOUD_X + TEXT_GAP_X, CLOUD_Y + TEXT_GAP_Y, 'Ура вы победили!', 'black', '16px PT Mono');
  renderText(ctx, CLOUD_X + TEXT_GAP_X, CLOUD_Y + 1.5 * TEXT_GAP_Y, 'Список результатов:', 'black', '16px PT Mono');
  renderBars(ctx, names, times);
};
