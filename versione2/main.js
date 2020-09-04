function getData() {

  $.ajax({

    url: 'http://localhost/php-ajax-dischi/versione2/data.php',
    method: 'GET',
    success: function (data){
      var success = data['success'];
      var dischi = data['response'];
      console.log(dischi);

      drawPoster(dischi);
    },

    error: function (err) {
      console.log('err', err);
    }


  });
}


function drawPoster(dischi) {

  var template = $('#poster-template').html();
  var compiled = Handlebars.compile(template);
  var target = $('.cds-container');

  for (var i = 0; i < dischi.length; i++) {
    var disco = dischi[i];
    var discoHTML = compiled(disco);

    target.append(discoHTML);
  }

}


function init() {
  console.log('Hello world');
  getData();
}


$(document).ready(init);
