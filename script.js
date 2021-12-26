function randint(max) {
    return Math.floor(Math.random() * max);
}

$.getJSON("https://api.github.com/users/HugeBrain16/repos", (data) => {
    $(".content-repo-count").html(data.length);
});

$("#jebait").click(function() {
    let jebait_redir = [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://www.youtube.com/watch?v=d1YBv2mWll0",
    ];
    let jebaited = false;
    $("#jebait").html('<img class="content-emote" src="https://cdn.frankerfacez.com/emoticon/341767/4"> 👉 <img class="content-emote" src="https://cdn.frankerfacez.com/emoticon/652079/4"> Wait for it...');
    
    if (!jebaited) {
        jebaited = true;
        setTimeout(() => {window.location.href = jebait_redir[randint(jebait_redir.length)]}, 3000); // pepeLaugh
    }
});

$("#random-repo").click(function() {
    $.getJSON("https://api.github.com/users/HugeBrain16/repos", (data) => {
        let repo = data[randint(data.length)];

        window.location.href = repo['html_url'];
    });
});
