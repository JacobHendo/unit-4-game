var images= ["assets/images/1.png", "assets/images/2.png","assets/images/3.png","assets/images/4.png"]
for(var i = 0; i < images.length; i++){
    var newImage = $("<img>")
    newImage.attr("src",images[i])
    newImage.attr("info",Math.ceil(Math.random()*11))
    newImage.addClass("crystals")
    $(".crystal-container").append(newImage)
}



$(document).on("click",".crystals",function(){

    var value = $(this).attr("info")
    console.log(value)
})
