$( document ).ready(function() {
   
$(".searchArtist").focus();

//$("button").on('click',function(e){
	//e.preventDefault();
	//var submit = $(".searchArtist").val();

//	$(".searchArtist").val("");

$("form").on("submit",function(e){
	e.preventDefault();

		var search = $(".searchArtist").val();
		
		$(".searchArtist").val("");

	$.ajax({
	url: 'http://api.soundcloud.com/tracks?client_id=03e4633e2d85874a921380e47cac705d&q='+search,//+submit, 
	type:"GET",
	success: function(result){

		var playlist = result;

		playlist.forEach(function (music) {
			$(".playlistRow").append('<div class="col-md-3 bottomRow"><div class="imageBox"><img data-song="'+music.id+'" class="coverPhoto" src='+music.artwork_url+'></div><p class="songTitle">'+music.title+'</div>');
		});


	$("img").on('click',function(){
		var imgClick = $(this).data("song");
		var songSource = "http://api.soundcloud.com/tracks/"+imgClick+"/stream?client_id=03e4633e2d85874a921380e47cac705d";	
			$("audio").attr("src",songSource);
			//alert(imgClick);

		});

	}


});

});

//});
});