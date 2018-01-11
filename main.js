var compliment = [
  "You can do it",
  "You are almost there",
  "I believe in you",
  "Way to go!"
]

var color = ["#F21313", "#3B13EF", "#12ED80", "#F9FF60", "#191970"]

var compliments = compliment[(Math.floor(Math.random()*4))]
var colors = color[(Math.floor(Math.random()*5))]

function upDate(background) {
  document.getElementById('background').innerHTML = compliments
  document.getElementById('background').style.backgroundColor = colors;
  console.log(colors);
}
