$(document).ready(function() { 
    // Easy way to disable buttons
    $('button').prop('disabled', true);
    $("#get-people").prop("disabled", false);

    $("#get-people").click(function() { 
        $("#api-response").append(people.responseText);
        $("#post-people").prop("disabled", false);
        $("#get-people").prop("disabled", true);
     });

     $("#post-people").click(function () { 
        $.post(apiUrl, { name: "Sean", favoriteCity: "New York" });
        $("#get-people-again").prop("disabled", false);
        $("#post-people").prop("disabled", true);
        updatePeople();
      });

      $("#get-people-again").click(function () { 
        $("#api-response").empty().append(people.responseText);
        $("#put-people").prop("disabled", false);
        $("#get-people-again").prop("disabled", true);
      });

      $("#put-people").click(function () { 
        $.ajax({
            method: "PUT",
            url: apiUrl + id,
            dataType: "json",
            data: {
                "favoriteCity": "Brooklyn"
            },
            success: function () {
                $("#get-by-id").prop("disabled", false);
                $("#put-people").prop("disabled", true);
                updatePeople();
            }
        });
      });

      $("#get-by-id").click(function () { 
        $("#api-response").empty().append(person.responseText);    
        $("#delete").prop("disabled", false);
        $("#get-by-id").prop("disabled", true);
      });

      $("#delete").click(function () { 
        $.ajax({
            method: "DELETE",
            url: apiUrl + id,
            success: function () {  
                $("#get-people-final").prop("disabled", false);
                $("#delete").prop("disabled", true);
                updatePeople();
            }
        });
      });

      $("#get-people-final").click(function () { 
        $("#api-response").empty().append(people.responseText);
        $("#get-people-final").prop("disabled", true);
      });

 });
        
var id = "58d16399e3f498001129c2de";
var apiUrl = "https://mighty-sands-78553.herokuapp.com/api/people/";        
var people = $.get(apiUrl);
var person = $.get(apiUrl + id);

function updatePeople() {
    people = $.get(apiUrl);
}