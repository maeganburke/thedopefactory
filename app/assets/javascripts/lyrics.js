function searchGenius(searchQuery) {

  $.ajax({
    url: 'https://api.genius.com/search/' + searchQuery + '?access_token=iVUfV0bo44RJpkMuzDHyD9C4em2ioJkNjqNTDFvqg1GikNmHWo6CnZOaoQ8cpLbZ',
    dataType: 'json',
    success: function(response) {
      console.log(response)
    },
    error: function(error) {
      console.log(error)
    }
  });
};
