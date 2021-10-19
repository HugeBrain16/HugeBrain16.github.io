$.getJSON("https://api.github.com/users/HugeBrain16/repos", (data) => {
    $(".content-repo-count").html(data.length);
});

$(".content-jebait").click(function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // pepeLaugh
});
