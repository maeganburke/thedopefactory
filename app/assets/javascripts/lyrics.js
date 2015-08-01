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
