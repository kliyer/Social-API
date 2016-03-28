
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
		output = '<li><a class="twitter-share-button"
  href="https://twitter.com/intent/tweet">
Tweet</a><iframe src=\"//www.youtube.com/embed/'+pid+'\"</li>';
		$('#results').append(output);
		})
	}
	);

});
