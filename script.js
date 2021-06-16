var Ribbon = document.getElementById("Ribbon");
var RibbonCtx = Ribbon.getContext("2d");

RibbonCtx.font = "80px Verdana";
RibbonCtx.fillText("HugeBrain16", 20, 85);

// get random HugeBrain16's repository
var randomRepo = document.getElementById("randomRepo");
var randomRepoURL = document.getElementById("randomRepoURL");

$.getJSON("https://api.github.com/users/HugeBrain16/repos", function(data) {
	let Repos = [];
	const BASE_URL_IMG = "https://gh-card.dev/repos/HugeBrain16/"
	const BASE_URL_GITHUB = "https://github.com/HugeBrain16/"

	for (i = 0; i < data.length; i++) {
		Repos.push(data[i]["name"]);
	}

	var repo = Repos[Math.floor(Math.random()*Repos.length)]
	var image = BASE_URL_IMG + repo + ".svg";
	var url = BASE_URL_GITHUB + repo;
	randomRepo.src = image;
	randomRepoURL.href = url;
});
