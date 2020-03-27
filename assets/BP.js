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
    $(".normal").click(function(){
        blackPantherImage.animate({ height: "65vh" });
        console.log("normal button was pressed");
    });
    $(".left").on("click", function(){
        blackPantherImage.animate({ left: "-=200px" }, "normal")
        console.log("left button was pressed!");
    })

})