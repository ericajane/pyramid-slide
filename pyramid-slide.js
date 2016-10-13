
    var heightStr = $("input").val();



    // convert the string to an int
    height = parseInt(heightStr);

    drawPyramid(height);

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

// clear the old content from the #pyramid container
    $("#pyramid").empty();

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row
        rowElem = $("<p>").html(rowStr);

        // TODO 1
        // insert the paragraph into the #pyramid container
        $("#pyramid").append(rowElem);
    }
}
