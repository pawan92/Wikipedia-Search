$(document).ready(function () {
  var input;

  $("#searchbutton").click(function() 
    { getWiki(
      $("#inputsearch").val());


    });
  $(".search-query").keypress(function(event) {
       if(event.which === 13) {
           input = $("#inputsearch").val();

           event.preventDefault();
           getWiki(input);
       }
    });


});

function getWiki(input) {
  var wiki ="http://en.wikipedia.org//w/api.php?action=opensearch&format=json&search="+input+ "&limit=12&callback=?";
    $.ajax({
        dataType: "jsonp",
        url: wiki,
        success: callback
    });
}

function callback(data){
    //console.log(data);
  $("ul").html("");
  for (var i = 0; i < data[1].length; i++) {
    var entry = '<li><h4><a href="' + data[3][i] + '"target="_blank">' + data[1][i] + '</a></h4><span>' + data[2][i] +'</span>';
    $("ul").append(entry);
    $(".result").css('background', 'rgba(300,300,300, .8)');

}

}
