var channelName = 'TechGuyWeb';


$(document).ready(function (){
	
		getVids();
		});


function getVids(){
	$.get(
	"https://developers.google.com/youtube/v3/videos",{
	part:'snippet',
	chart:'mostPopular',
	regionCode:'us',
	key:'AIzaSyAa1rfPGIPa7_LYPXkvPeE_5AIxwUgBHhE'},
	function(data){
		var output;
		$.each(data.items,function(i,item){
		console.log(item);
		var videTitle = item.snippet.title;
		output = '<li>'+videTitle+'</li>';
		$('#results').append(output);
		})

	}


	);



}