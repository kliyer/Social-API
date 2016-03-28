
$(document).ready(function (){
	$.get(
	"https://www.googleapis.com/youtube/v3/videos",{
	part:'snippet',
	chart:'mostPopular',
	regionCode:'US',
	key:'AIzaSyAa1rfPGIPa7_LYPXkvPeE_5AIxwUgBHhE'},
	function(data){
		$.each(data.items,function(i,item){
		console.log(item);
		var pid = item.id;
		output = '<li><iframe src=\"//www.youtube.com/embed/'+pid+'\"</li>';
		$('#results').append(output);
		})
	}
	);

});