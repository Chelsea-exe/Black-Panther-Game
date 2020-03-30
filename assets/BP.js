$(document).ready(function() {
    // alert("jquery is loaded!");
    var blackPantherImage = $(".bp");
    var blackPantherAudio = document.createElement("audio");
    blackPantherAudio.setAttribute("src", "./assets/Kings-Dead-Black-Panther.mp3");
    $(".play").click(function(){
        blackPantherAudio.play();
        console.log("King's Dead is playing!");
    });
    $(".pause").click(function(){
        blackPantherAudio.pause();
        console.log("King's Dead has paused!");
    });
    $(".not-see").click(function(){
        blackPantherImage.animate({ opacity: "0.01" });
        console.log("invisible button was pressed!");
    });
    $(".visible").click(function(){
        blackPantherImage.animate({ opacity: "1" });
        console.log("visible button was pressed");
    });
    $(".shrink").click(function(){
        blackPantherImage.animate({ height: "5vh"});
        console.log("shrink button was pressed");
    });
    $(".growth").click(function(){
        blackPantherImage.animate({ height: "115vh" });
        console.log("growth button was pressed");
    });
    $(".normal").click(function() {
        blackPantherImage.animate({ height: "65vh" });
        console.log("normal button was pressed");
    });

    //the script for the amazing speed buttons aren't connecting even
    //with the console.log displaying the button was pressed.
    $("#left-btn").on("click", function() {
        blackPantherImage.animate({ left: "-=300px" }, "fast");
        console.log("left button was pressed!");
        // alert("black panther moved");
    });

    $("#right-btn").click(function() {
        blackPantherImage.animate({ left: "+=300px" }, "fast");
        console.log("right button was pressed");
    });
    $("#up-btn").click(function() {
        blackPantherImage.animate({ top: "-=300px" }, "fast");
        console.log("up button was pressed");
    });
    $("#down-btn").click(function() {
        blackPantherImage.animate({ top: "+=300px" }, "fast");
        console.log("down bottom was pressed");
    });

    $(".bp-soundtrack").click(function() {
        window.open("https://music.apple.com/us/album/black-panther-the-album-music-from-and-inspired-by/1440906927");
        console.log("Black Panther soundtrack link was used");
    });
    $("#bp-comic").click(function() {
        window.open("https://www.marvel.com/comics/characters/1009187/black_panther");
        console.log("Black Panther Comics");
    });
    $("#bp-movie").click(function() {
        window.open("https://www.marvel.com/movies/black-panther");
        console.log("Black Panther Movie");
    });

})