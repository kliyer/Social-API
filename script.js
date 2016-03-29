
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
		output = '<li class="erase"><a class="tweetbutton"href="\"https://twitter.com/intent/tweet\"">Tweet</a><iframe src=\"//www.youtube.com/embed/'+pid+'\"</li>';
		$('#results').append(output);
		})
	}
	);

});
$("form").on("submit",function(){
		  $(".erase").remove();
          $.get(
                  "https://www.googleapis.com/youtube/v3/videos",{
                            part: 'snippet',
                            maxResults: 10,
                      		q:encodeURIComponent($("#search-text-input").val()).replace(/%20/g,"+"),
                            key: 'AIzaSyCc1xGbk7VT3f-HVv4aL4HsHIHRCNrcpmw'},
                            function(data){
                                        var videos;
                                       $.each(data.items, function(i, item){
                                                console.log(item);
                                                var pid = item.id;
                                                videos = '<li class="erase"><a class="tweetbutton"href="\"https://twitter.com/intent/tweet\"">Tweet</a><iframe src=\"//www.youtube.com/embed/'+pid+'\"</li>';
                             //Append to results listStyleType
                             $('#results').append(videos);

                             })

                      }
                  );
	 });