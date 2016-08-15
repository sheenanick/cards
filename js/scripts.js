$(document).ready(function() {
  $("button").click(function(event) {
    var cards = ["king", "queen", "jack", "ten", "nine", "eight", "seven", "six", "five", "four", "three", "two", "ace"]
    var suits = ["hearts", "diamonds", "clubs", "spades"]
    cards.forEach(function(card) {
      suits.forEach(function(suit) {
        var deck = card + " of " + suit
        $("ul").append("<li>" + deck + "</li>");
      });
    });
  });
});
