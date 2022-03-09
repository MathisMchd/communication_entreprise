
var actualSlide = 1

function followingSlide() {

    if (actualSlide == 1) {
        actualSlide = 4
    }

    actualSlide -= 1

    console.log("pictures/slide_0" + actualSlide + ".jpg")
    document.getElementById("slide").src = "pictures/slide_0" + actualSlide + ".jpg"

}

function previousSlide() {



    if (actualSlide == 4) {
        actualSlide = 0
    }
    actualSlide += 1

    console.log("pictures/slide_0${actualSlide}.jpg")
    document.getElementById("slide").src = "pictures/slide_0" + actualSlide + ".jpg"

}