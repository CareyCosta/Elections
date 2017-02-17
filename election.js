$(document).ready(function() {

  $.ajax( {
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    //loop over candidates
    //append a <li> element for each candidate to document
    //show the name and votes count of each candidate

    var name = data.name
    var votes = data.votes
    var candidateDetails = $('#list');

    console.log(data);

    for (var i=0; i < data.candidates.length; i++) {
      console.log(data.candidates[i].name);
      $('<li></li>').html(data.candidates[i].name).appendTo(candidateDetails);
      $('<li></li>').html(data.candidates[i].votes).appendTo(candidateDetails);
    };
  });

});
