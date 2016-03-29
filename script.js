
$(document).ready(function (){
	$.get(
		"https://www.googleapis.com/youtube/v3/videos",{
		part:'snippet',
		chart:'mostPopular',
		regionCode:'US',
		key:'AIzaSyAa1rfPGIPa7_LYPXkvPeE_5AIxwUgBHhE'},
		function(data){
			$.each(data.items,function(i,item){
			var pid = item.id;
			output = '<li class="erase"><a class="tweetbutton"href="\"https://twitter.com/intent/tweet\"">Tweet</a><iframe src=\"//www.youtube.com/embed/'+pid+'\"</li>';
			$('#results').append(output);
			})
		}
	);
	 $('#searchForm').on('submit', function(e){
	 	$(".erase").remove();
	 	$.get(
			"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet',
			q:encodeURIComponent($("#search-text-input").val()).replace(/%20/g,"+"),
			key: 'AIzaSyAa1rfPGIPa7_LYPXkvPeE_5AIxwUgBHhE'},
			function(data){
					$.each(data.items,function(i,item){
					var kind = item.id.kind;
					console.log(item);
					console.log(pid);
					if(kind ==='youtube#video'){
					var pid = item.id.videoId;
					output = '<li class="erase"><a class="tweetbutton"href="\"https://twitter.com/intent/tweet\"">Tweet</a><iframe src=\"//www.youtube.com/embed/'+pid+'\"</li>';
					$('#results').append(output);
					}
					})
			}
		);
       
    });

});
