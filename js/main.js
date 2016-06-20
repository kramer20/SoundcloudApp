$( document ).ready(function() {
   

$("form").on("submit",function(e){
	e.preventDefault();

	var search = $(".searchArtist").val();

	var data = {
		searchArtist:search,
	};

	$.ajax({
	url: 'http://api.soundcloud.com/tracks?client_id=03e4633e2d85874a921380e47cac705d&q='+search, 
	type:"GET",
	success: function(result){

	var playlist = result;

	playlist.forEach(function (music) {
		$(".playlistRow").append('<div class="col-md-3 bottomRow"><div class="imageBox"><img class="coverPhoto" src='+music.artwork_url+'></div><p class="songTitle">'+music.title+'</div>');
	});
}

});

});
});