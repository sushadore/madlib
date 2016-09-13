$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var location1Input = $("input#location1").val();
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var question1Input = $("input#question1").val();
    var verb1Input = $("input#verb1").val();
    var noun1Input = $("input#noun1").val();

    $(".location1").text(location1Input);
    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".question1").text(question1Input);
    $(".verb1").text(verb1Input);
    $(".noun1").text(noun1Input);

    $("#story").show();

    event.preventDefault();
  });
});
