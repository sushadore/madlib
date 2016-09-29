$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["location1", "person1", "person2", "question1", "verb1", "noun1"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });



    $("#story").show();

    event.preventDefault();
 });
});
