console.log("Pirate Ratio loaded!");

var round = function (num) {
  var decimals = 4;
  var sign = num >= 0 ? 1 : -1;
  return (Math.round((num * Math.pow(10, decimals)) + (sign * 0.001)) / Math.pow(10, decimals)).toFixed(decimals);
}

$(".header").append("<th><abbr title='Ratio'><a href='#' title='Can\'t order by ratio yet!'>RT</a></abbr></th>");
var seeders = [];
var leechers = [];
$("td:nth-child(3)").each(function () {
  var seederCell = $(this);
  seeders.push(parseInt(seederCell.html()));
});
$("td:nth-child(4)").each(function () {
  var leecherCell = $(this);
  leechers.push(parseInt(leecherCell.html()));
});
$("tr").not(".header").append(function (index, html) {
  var row = $(this);
  var numSeeders = seeders[index];
  var numLeechers = leechers[index];
  var ratio = round(numSeeders / numLeechers);
  return "<td align='right'>" + ratio + "</td>";
});