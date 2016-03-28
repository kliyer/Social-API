var channelName = 'TechGuyWeb';


$(document).ready(function (){
	$.get(
	"https://www.googleapis.com/youtube/v3/channels",{
	part:'contentDetails',
	forUsername: channelName,
	key:'AIzaSyAa1rfPGIPa7_LYPXkvPeE_5AIxwUgBHhE'},
	function(data){
		$.each(data.items,function(i,item){
		console.log(item);
		var pid = item.contentDetails.relatedPlaylists.uploads;
		getVids(pid);
		})

	}


	);



});
function getVids(pid){
	$.get(
	"https://www.googleapis.com/youtube/v3/playlistItems",{
	part:'snippet',
	playlistId: pid,
	maxResults:10,
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