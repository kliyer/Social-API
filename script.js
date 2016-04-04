
$(document).ready(function (){
	$.get(
		"https://www.googleapis.com/youtube/v3/videos",{
		part:'snippet',
		chart:'mostPopular',
		regionCode:'US',
		key:'AIzaSyAa1rfPGIPa7_LYPXkvPeE_5AIxwUgBHhE',	
		maxResults: 9},
		function(data){
			var output = "";
			$.each(data.items, function(i,item){
				var pid = item.id;

				var text = "Love this video!&tw_p=tweetbutton&url=http://youtube.com/watch?v=" + pid ;
				var twitter = "https://twitter.com/intent/tweet?text=" + text;

				output = '<li class="erase"><a data-text="Google.com http://www.youtube.com/'+pid+'" class="tweetbutton" target="_blank" href="'+ twitter +'">Tweet</a>';
				output += '<iframe src="//www.youtube.com/embed/'+pid+'" allowfullscreen>';
				output += '</li>';				
				$('#yt-results').append(output);
			});

			var titles = data.items[0].snippet.title

			$.get(
				"tweets",{
					q:encodeURIComponent(titles).replace(/%20/g,"+")
				},
				
				function(data){
					var output = "";
					$.each(data, function(i,item){
						output = '<li class="erase">';
						output += item;
						output += '</li>';				
						$('#twit-results').append(output);
					});
				}
			);

		}
	);


	$('#searchForm').on('submit', function(e){
	 	$(".erase").remove();
	 	$.get(
			"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet',
			q:encodeURIComponent($("#search-text-input").val()).replace(/%20/g,"+"),
			key: 'AIzaSyAa1rfPGIPa7_LYPXkvPeE_5AIxwUgBHhE',
			maxResults: 9},
			function(data){
				$.each(data.items,function(i,item){
					var kind = item.id.kind;
					if(kind ==='youtube#video'){
						var pid = item.id.videoId;

						var text = "Love this video!&tw_p=tweetbutton&url=http://youtube.com/watch?v=" + pid ;
						var twitter = "https://twitter.com/intent/tweet?text=" + text;

						output = '<li class="erase"><a data-text="http://www.youtube.com/'+pid+'" class="tweetbutton" target="_blank" href="' + twitter + '">Tweet</a><iframe src="//www.youtube.com/embed/'+pid+'" allowfullscreen></li>';
						$('#yt-results').append(output);
					}
				});
			}
		);



		$.get(
			"tweets",{
				q:encodeURIComponent($("#search-text-input").val()).replace(/%20/g,"+")
			},
			
			function(data){
				var output = "";
				$.each(data, function(i,item){
					output = '<li class="erase">';
					output += item;
					output += '</li>';				
					$('#twit-results').append(output);
				});
			}
		);


		return false;
       
    });

});
