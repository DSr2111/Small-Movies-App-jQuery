//Contains a form with two inputs for a title and rating along with a button to submit the form.

//When the form is submitted, capture the values for each of the inputs and append them
//to the DOM along with a button to remove each title and rating from the DOM.

//When the button to remove is clicked, remove each title and rating from the DOM.

$(document).ready(function () {
  $("#movieForm").submit(function (e) {
    e.preventDefault();

    let movieTitle = $("#title").val();
    let rating = $("#rating").val();

    $("#movieList").append(
      "<li>" +
        "  " +
        movieTitle +
        " -> " +
        rating +
        "/10" +
        "  " +
        '<button class="delete-btn">Delete</button></li>'
    );

    $("#title").val("");
    $("#rating").val("");
  });

  $("#movieList").on("click", ".delete-btn", function () {
    $(this).parent().remove();
  });
});
