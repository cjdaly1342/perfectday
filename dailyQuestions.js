//-----------------------Music algorithm material -------------------------------------
//_________________________________________________________________________________________

//initialize and declare variables
const lastSecret = "6f8f8bde4aea4f35b0d9be752f214e1b";
const lastId = "a5149e7d86da487788743bddb8aea6c5";
var Lastkey = "0b46e5625710ee145a28dbf47184c251";
var mood = "";
var artist = "metallica";
var track = "master_of_puppets";
var url, isNew, trackChecker, trackRandomizer, questionNum, songArtist, songTrack;
var playlist = [];
var newTrack = {};
var playlistLength = 15;
var userFeelings = [];


//set up the questions gauging how the user is feeling
var userQuestions = [
	//question 1
	{	verbiage: "How is your day going so far?"
	,	answers: ["Freaking Awesome!", "No complaints here.", "I want to break something.", "I feel like my heart has been round housed.", "Ready to get frisky!"]
	,}
	//question 2
	,{	verbiage: "What type of music are you feeling like?"
	,	answers: ["Rock", "Country", "Rap", "Hip Hop", "Pop", "Alternative/Punk"]
	,}
	//question 3
	
];

//set up the questions gauging how the user is feeling
function questionSetup(){
	questionNum = 0;
		//display our questions and answers
		$("#dailyQuestionButton").html("");
		nextQuestion();
}; //when the user selects an answer this function will run
function answerSelect(choice){
	userFeelings.push(choice);
	window.localStorage.setItem("Feelings", userFeelings[0])
	window.localStorage.setItem("Music Choice", userFeelings[1]);
	nextQuestion();
	console.log(userFeelings)

}; //this function appends the next question to the page


function nextQuestion(){
	if(questionNum < userQuestions.length){
	$("#dailyQuestionAnswers").html(""); // clear the previous question
	$("#dailyQuestion").html(userQuestions[questionNum].verbiage);
		for (var i = 0; i < userQuestions[questionNum].answers.length; i++) {
			//set up and append the new answers
			var newP = $("<p>").text(userQuestions[questionNum].answers[i]);
			newP.attr("class", "text-center");
			newP.attr("id", "answerId");
			newP.attr("onclick", "answerSelect(this.innerHTML)");	
			$("#dailyQuestionAnswers").append(newP);	
		}	
		questionNum++;
	}else{
		//if we have answered the final question, display the final user prompt
		$("#questionsHeader").html("Are you ready to see your Perfect Day?");
		$("#dailyQuestion").html("");
		$("#dailyQuestionAnswers").html("");
		$("#dailyQuestionButton").html("<button type='submit' class='btn btn-default' onclick='generateDay()'>Let's do it</button>");
		$(".btn btn-default").click(function(){
    	$("#dailyQuestionButton").hide(1000);
}); 
	}
}
;


//the final user prompt that will generate the Perfect Day
function generateDay(){

//decide what song to use for determining similar tracks
//[0] is the mood
//[1] is the genre choice
	if(userFeelings[0] === "Freaking Awesome!"){
		if(userFeelings[1] === "Rock"){
			songArtist = "ACDC";
			songTrack = "shoot+to+thrill";
			go_get("https://www.youtube.com/watch?v=0VJGzwVl7TE&feature=youtu.be&list=SRac%2Fdc%20shoot%20to%20thrill");
		}else if(userFeelings[1] === "Country"){
			songArtist = "Jason+Aldean";
			songTrack = "My+Kinda+Party";
			go_get("https://www.youtube.com/watch?v=t8DzMIf95hM&feature=youtu.be&list=SRjason%20aldeen%20my%20kinda%20party");
		}else if(userFeelings[1] === "Rap"){
			songArtist = "Ice+Cube";
			songTrack = "You+Can+Do+It";
			go_get("https://www.youtube.com/watch?v=L2Q76ctr3ys&feature=youtu.be&list=SReminem%20my%20name%20is");
		}else if(userFeelings[1] === "Hip Hop"){
			songArtist = "Kid+Cudi";
			songTrack = "Soundtrack+2+My+Life";
			go_get("https://www.youtube.com/watch?v=LpTLpJRzZUw&feature=youtu.be&list=SRkid%20cudi%20soundtrack%202%20my%20life");
		}else if(userFeelings[1] === "Pop"){
			songArtist = "Katy+Perry";
			songTrack = "Last+Friday+Night";
			go_get("https://www.youtube.com/watch?v=gzjYiMOowhE&feature=youtu.be&list=SRkaty%20perry%20last%20friday%20night");
		}else if(userFeelings[1] === "Alternative/Punk"){
			songArtist = "Avril+Lavigne";
			songTrack = "Girlfriend";
			go_get("https://www.youtube.com/watch?v=rB4Bg9vs15c&feature=youtu.be&list=SRavril%20lavigne%20girlfriend");
		}
	}else if(userFeelings[0] === "No complaints here."){
		if(userFeelings[1] === "Rock"){
			songArtist = "Aerosmith";
			songTrack = "sweet+emotion";
			go_get("https://www.youtube.com/watch?v=xvKF3WQYADk&feature=youtu.be&list=SRaerosmith%20sweet%20emotion");
		}else if(userFeelings[1] === "Country"){
			songArtist = "George+Strait";
			songTrack = "Give+it+Away";
			go_get("https://www.youtube.com/watch?v=y8Bf8HyEGew&feature=youtu.be&list=SRgeorge%20strait%20give%20it%20away");
		}else if(userFeelings[1] === "Rap"){
			songArtist = "Tech+N9ne";
			songTrack = "Dysfunctional";
			go_get("https://www.youtube.com/watch?v=nkFPiu400bk&feature=youtu.be&list=SRtech%20nine%20dysfunction");
		}else if(userFeelings[1] === "Hip Hop"){
			songArtist = "Shakira";
			songTrack = "Hips+Don't+Lie";
			go_get("https://www.youtube.com/watch?v=N7afsQTsCXM&feature=youtu.be&list=SRshakira%20hips%20don%27t%20lie");
		}else if(userFeelings[1] === "Pop"){
			songArtist = "Twenty+One+Pilots";
			songTrack = "Stressed+Out";
			go_get("https://www.youtube.com/watch?v=W5RQk1TvUIc&feature=youtu.be&list=SRtwenty%20one%20pilots%20stressed%20out%20live");
		}else if(userFeelings[1] === "Alternative/Punk"){
			songArtist = "Green+Day";
			songTrack = "Basket+Case";
			go_get("https://www.youtube.com/watch?v=opuKBVTrNeM&feature=youtu.be&list=SRgreen%20day%20basket%20case");
		}
	}else if(userFeelings[0] === "I want to break something."){
		if(userFeelings[1] === "Rock"){
			songArtist = "Metallica";
			songTrack = "master+of+puppets";
			go_get("https://www.youtube.com/watch?v=xnKhsTXoKCI&feature=youtu.be&list=SRmetallica%20master%20of%20puppets");
		}else if(userFeelings[1] === "Country"){
			songArtist = "brantley+gilbert";
			songTrack = "Take+it+outside";
			go_get("https://www.youtube.com/watch?v=r1gTdbL83e4&feature=youtu.be&list=SRbrantley%20gilbert%20take%20it%20outside");
		}else if(userFeelings[1] === "Rap"){
			songArtist = "Pastor+Troy";
			songTrack = "Murder+Man";
			go_get("https://www.youtube.com/watch?v=3xVFG_qPX_U&feature=youtu.be&list=SRpastor%20troy%20murder%20man");
		}else if(userFeelings[1] === "Hip Hop"){
			songArtist = "DMX";
			songTrack = "Party+Up";
			go_get("https://www.youtube.com/watch?v=ulM_zNLUzk4&feature=youtu.be&list=SRdmx%20party%20up");
		}else if(userFeelings[1] === "Pop"){
			songArtist = "Pink";
			songTrack = "So+What";
			go_get("https://www.youtube.com/watch?v=7zRzE-ACwRg&feature=youtu.be&list=SRpink%20so%20what");
		}else if(userFeelings[1] === "Alternative/Punk"){
			songArtist = "Rage+Against+The+Machine";
			songTrack = "Killing+in+the+Name+Of";
			go_get("https://www.youtube.com/watch?v=qFLyNAMzSxY&feature=youtu.be&list=SRrage%20killing%20in%20the%20name%20of");
		}
	}else if(userFeelings[0] === "I feel like my heart has been round housed."){
		if(userFeelings[1] === "Rock"){
			songArtist = "The+Who";
			songTrack = "Behind+Blue+Eyes";
			go_get("https://www.youtube.com/watch?v=IirRKxYjjJQ&feature=youtu.be&list=SRthe%20who%20behind%20blue%20eyes");
		}else if(userFeelings[1] === "Country"){
			songArtist = "Brad+Paisley";
			songTrack = "Whiskey+Lullaby";
			go_get("https://www.youtube.com/watch?v=cDZireHUd7Q&feature=youtu.be&list=SRbrad%20paisley%20whiskey%20lullaby");
		}else if(userFeelings[1] === "Rap"){
			songArtist = "Eminem";
			songTrack = "When+I'm+Gone";
			go_get("https://www.youtube.com/watch?v=Dn3qfGz_Yq8&feature=youtu.be&list=SReminem%20when%20im%20gone%20live");
		}else if(userFeelings[1] === "Hip Hop"){
			songArtist = "TLC";
			songTrack = "Waterfalls";
	;		go_get("https://www.youtube.com/watch?v=M8C-oLn-AkA&feature=youtu.be&list=SRtlc%20waterfalls");
		}else if(userFeelings[1] === "Pop"){
			songArtist = "Backstreet+Boys";
			songTrack = "Show+Me+The+Meaning+of+Being+Lonely";
			go_get("https://www.youtube.com/watch?v=g1PjCofobdk&feature=youtu.be&list=SRbackstreet%20boys%20show%20me%20the%20meaning%20of%20being%20lonely");
		}else if(userFeelings[1] === "Alternative/Punk"){
			songArtist = "Linkin+Park";
			songTrack = "Shadow+of+The+Day";
			go_get("https://www.youtube.com/watch?v=ODzPM_QnngA&feature=youtu.be&list=SRlinkin%20park%20shadow%20of%20the%20day");
		}
	}else if(userFeelings[0] === "Ready to get frisky!"){
		if(userFeelings[1] === "Rock"){
			songArtist = "Def+Leppard";
			songTrack = "Pour+Some+Sugar+on+Me";
			go_get("https://www.youtube.com/watch?v=AQ4xwmZ6zi4&feature=youtu.be&list=SRdef%20leppard%20pour%20some%20sugar%20on%20me");
		}else if(userFeelings[1] === "Country"){
			songArtist = "Shania+Twain";
			songTrack = "That+Don%27t+Impress+Me+Much";
			go_get("https://www.youtube.com/watch?v=8moJKC22Wuw&feature=youtu.be&list=SRshania%20twain%20that%20don%27t%20impress%20me%20much");
		}else if(userFeelings[1] === "Rap"){
			songArtist = "Lil+Kim";
			songTrack = "Magic+Stick";
			go_get("https://www.youtube.com/watch?v=Uz8iri9qhv0&feature=youtu.be&list=SRlil%20kim%20magic%20stick");
		}else if(userFeelings[1] === "Hip Hop"){
			songArtist = "Justin+Timberlake";
			songTrack = "SexyBack";
			go_get("https://www.youtube.com/watch?v=fTZAEDYA8n4&feature=youtu.be&list=SRsexy%20is%20back");
		}else if(userFeelings[1] === "Pop"){
			songArtist = "Taylor+Swift";
			songTrack = "Wildest+Dreams";
			go_get("https://www.youtube.com/watch?v=7aK4YSx3ddc&feature=youtu.be&list=SRtaylor%20swift%20wildest%20dreams");
		}else if(userFeelings[1] === "Alternative/Punk"){
			songArtist = "Say+Anything";
			songTrack = "Wow,+I+Can+Get+Sexual+Too";
			go_get("https://www.youtube.com/watch?v=ZePmTgk65WY&feature=youtu.be&list=SRsay%20anything%20wow%20i%20can%20get%20sexual%20too");
		}
	}

console.log("Artist: " + songArtist);
console.log("Track: " + songTrack);
//set up our api
	var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=" + songArtist + "&track=" + songTrack + "&api_key=" + Lastkey + "&format=json";
   
  	$.ajax({
      url: queryURL,
      method: "GET",
    }).done(function(response) {
    	console.log(response);
    	trackChecker = [];

    	//set up a playlist containing i songs
    	for (var i = 0; i < playlistLength; i++) {

    		//randomize the songs in the list so no 2 playlists are the same
     		var isNew = false;
			while(isNew === false){
				isNew = true;
				trackRandomizer = Math.floor(Math.random() * response.similartracks.track.length);
				for (var i = 0; i <= trackChecker.length; i++) {
					if(trackChecker[i] === trackRandomizer){
						isNew = false;
					}
				}
				if(isNew === true){
					trackChecker.push(trackRandomizer);
				}
			}
			
    		//create a new object containing our related song info.
    		var newTrack = {
    			artist: response.similartracks.track[trackRandomizer].artist.name
    			,track: response.similartracks.track[trackRandomizer].name
    			,url: response.similartracks.track[trackRandomizer].artist.url
    			,duration: response.similartracks.track[trackRandomizer].duration
    		};
    		//add our new song to our playlist
    		playlist.push(newTrack);   		
    	}
    	//console.log("trackChecker: " + trackChecker);
    	console.log(playlist);
    });
}
//------------------------end music algorithm material---------------------------
//_________________________________________________________________________________

// ================================================================================
// YouTube Embedded Player
// ================================================================================
// YouTube API -
// Client ID -  393374501619-le0p6odi94e82kgo3uguo8aelkq8liai.apps.googleusercontent.com 
// Client Secret -  B28dsTe3rjRrpSGJ31G6ao7P 
// API Key - AIzaSyAzXrTFaWY11Tg26WEB7nZ2kMkS6YxXu5o
// API Key 2 - AIzaSyAWQKkDi_ozkrPydgVvpNp747T5HHdzoRE
// {"web":{"client_id":"393374501619-le0p6odi94e82kgo3uguo8aelkq8liai.apps.googleusercontent.com",
// "project_id":"poetic-dispatch-175916",
// "auth_uri":"https://accounts.google.com/o/oauth2/auth",
// "token_uri":"https://accounts.google.com/o/oauth2/token",
// "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
// "client_secret":"B28dsTe3rjRrpSGJ31G6ao7P",
// "javascript_origins":["http://localhost:8000"]}};
// ================================================================================
// on submit function, calls the YouTube Video function from google apis
$(function() {
	$("form").on("submit", function(e) {
		e.preventDefault();
		var request = gapi.client.youtube.search.list({
			part: "snippet",
			type: "video",
			q: encodeURIComponent($('#search').val()).replace(/%20/g, "+"),
			maxResults: 3,
			order: "viewCount",

		});
		request.execute(function(response) {
			var results = response.result;
			$.each(results.items, function (index, item) {
				$.get("tpl/item.html", function(data) {
					$("#results").append(tplawesome(data, [{"title":item.snipped.title, "videoid":item.id.videoId}]));
				});
			});
			resetVideoHeight();
		});
	});

	$(window).on("resize", resetVideoHeight);
}); // End Function

// This function resets the video when the webpage is reloaded
function resetVideoHeight() {
	$(".video").css("height", $("#results").width() * 9/16);
} // End function resetVideoHeight

// There needs to be a src URL in the HTML code that calls this function init
// Here is the link I used to get it to work
// <script src="https://apis.google.com/js/client.js?onload=init"></script>
function init() {
	gapi.client.setApiKey("AIzaSyAzXrTFaWY11Tg26WEB7nZ2kMkS6YxXu5o");
	gapi.client.load("youtube","v3", function() {

	});
} // End Function Init

$("#searchForm").on("click" ,function( event ) {
  event.preventDefault();
	go_get(document.getElementById('yourtextfield').value); 
	return false;
})
var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=new+world+id&key=AIzaSyAzXrTFaWY11Tg26WEB7nZ2kMkS6YxXu5o"
var songs = ['Deep Purple Highway Star', 'Motorhead Overkill'];
$.ajax({
	url:queryURL,
	method: "GET"
}).done(function(response) {
	//renderButtons();
	$("#container").html('<iframe width="420" height="315"src="https://www.youtube.com/embed/"></iframe>')
}); // End ajax query_URL
//var playList = ['PL7Z6pxwF3GAR1KSMqtlSKjSdr_D20hmKP']
 function go_get(input) {
   	//var base_url = 'www.youtube.com/embed/videoseries?list='
   	var base_url = 'http://www.youtube.com/embed?listType=search&list=';
   	var search_field = input
   	var target_url = base_url + search_field;
   	var ifr = document.getElementById('youriframe');
   	ifr.src = target_url;
   	return false;
   }; //End Function go_get
// ===================================================================================
