$(document).ready(function() { 

  //Reset database state to default
  $.ajax({
    method: "DELETE",
    url: personUrl,
    success: function () { 
      updateVars();
      // Easy way to disable buttons
      $('button').prop('disabled', true);
      $("#get-people").prop("disabled", false); 
      
      $("#get-people").click(function() { 
        $("#api-response").empty().append(people.responseText);
        $("#post-people").prop("disabled", false);
        $("#get-people").prop("disabled", true);
      });

      $("#post-people").click(function () { 
        $.post(apiUrl, {_id: "1", name: "Sean", favoriteCity: "New York" });
        updateVars();
        $("#get-people-again").prop("disabled", false);
        $("#post-people").prop("disabled", true);
      });

      $("#get-people-again").click(function () { 
        $("#api-response").empty().append(people.responseText);
        $("#put-people").prop("disabled", false);
        $("#get-people-again").prop("disabled", true);
      });

      $("#put-people").click(function () { 
        $.ajax({
          method: "PUT",
          url: personUrl,
          dataType: "json",
          data: {
            "name": "Sean",
            "favoriteCity": "Brooklyn"
          },
          success: function () {
            $("#get-by-id").prop("disabled", false);
            $("#put-people").prop("disabled", true);
            updateVars();
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
          url: personUrl,
          success: function () {  
            $("#get-people").prop("disabled", false);
            $("#delete").prop("disabled", true);
            updateVars();
          }
        });
      });
    }
  });
});
        
var apiUrl = "https://mighty-sands-78553.herokuapp.com/api/people/";        
var people = $.get(apiUrl);
var personUrl = "https://mighty-sands-78553.herokuapp.com/api/people/1";
var person = $.get(personUrl);

function updateVars() {
  people = $.get(apiUrl);
  person = $.get(personUrl)
}
