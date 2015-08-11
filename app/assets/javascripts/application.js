// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function searchGenius(searchQuery) {

  var data = { query: searchQuery }

  $.ajax({
    url: '/search',
    data: data,
    dataType: 'json',
    success: function(response) {
      console.log("phrase data received!");
      var songTitle = (response.response.hits[0].result.title);
      console.log(response);
      var songArtist = (response.response.hits[0].result.primary_artist.name);
      var songURL = (response.response.hits[0].result.url);
      console.log(songURL);
      // var showURL = ('<a href ="' + url + '></a>');
      $('#show-title').empty();
      // $('#show-url').append(showURL);
        if (songArtist === "Kanye West") {
          console.log("we're only showing kanye songs!");
          $('#show-title').append("That's " + songTitle + " by " + songArtist + "!");
          $('#show-result').append('<div class="block_1"></div> <hr />');
          $('#show-url').append('<a href=' + songURL + '>Check out the lyrics on Genius</a>');
        } else {
          $('#show-title').append("You lame, bruh! <br> That's not Kanye, that's " + songTitle + " by " + songArtist + "!");
          console.log("not a kanye song!")
        };
    },
    error: function(error) {
      console.log(error)
    }
  });
};


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
          url: '/sayye',
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
