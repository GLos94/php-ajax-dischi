


function getData() {
  var dischi = [];
  $.ajax({

    url: 'data.php',
    method: 'GET',
    success: function (data){
      var success = data['success'];
      var dischi = data['response'];
      console.log(dischi);

      drawPoster(dischi)
    },

    error: function (err) {
      console.log('err', err);
    }


  });
}


function drawPoster(data) {

  var template = $('#poster-template').html();
  var compiled = Handlebars.compile(template);
  var target = $('.cds-container');

  for (var i = 0; i < dischi.length; i++) {
    var disco = dischi[i];
    disco = compiled(dischi[i])

    target.append(disco);
}

}


function init() {
  console.log('Hello world');
  getData();
}


$(document).ready(init);
