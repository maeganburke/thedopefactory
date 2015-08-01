
  function initPhrases() {
    $(document).ready(function() {
      var phrases = $("#phraselist").data("phrases")

      $('form').on('submit', function(event) {
        event.preventDefault();
        var addPhrase = $('#lyrics-input').val();
        searchGenius(addPhrase);
        createNewPhrase(addPhrase);
      });

      var createNewPhrase = function(addPhrase) {

        var data = { phrase: { text: addPhrase } }

        $.ajax ({
          url: '/phrases',
          data: data,
          dataType: 'json',
          method: 'POST',
          success: function(response) {
            console.log(response);
          },
          error: function(error) {
              console.log(error)
          }
        });
      }

      $('.refresh-btn').click(function() {
        event.preventDefault();
        showPhrase();
      });

      var showPhrase = function() {
        $(".kanye-phrases").empty();
        var phraseIndex = Math.floor(Math.random() * (phrases.length));
        var phraseObject = phrases[phraseIndex];
        $(".kanye-phrases").append('"' + phraseObject.text + '"');
        console.log(phraseObject);
        // $("#show-lyrics").append()
      };

      $('.modal-btn').click(function(){
        $('.phrases-list').empty();
        event.preventDefault();
        $('#myModal').modal();
        phrases.forEach(function(phrase) {
          console.log(phrase.text);
          $('.phrases-list').append('<li>"' + phrase.text + '"</li>');
        });
      });

      showPhrase();
    });
  }
