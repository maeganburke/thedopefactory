function searchGenius(searchQuery) {

  $.ajax({
    url: '/search/' + searchQuery,
    dataType: 'json',
    beforeSend: function(request){

      // enter HTTP authorization header here

    },
    success: function(response) {
      console.log(response)
    },
    error: function(error) {
      console.log(error)
    }
  });
};
