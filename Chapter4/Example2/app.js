var main = function () {
    "use strict";

    var buttonClicked1 = false;
    var buttonClicked2 = false;

    var addCommentFromInputBox = function (buttonClicked2) {
        var $new_comment;

        if ($(".comment-input1 input").val() !== "" && buttonClicked1 === true) {
            $new_comment = $("<p id='User1'>").text($(".comment-input1 input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input1 input").val("");
            buttonClicked1 = false;
        }

        else if($(".comment-input2 input").val() !== "" && buttonClicked2 === true) {
            $new_comment = $("<p id='User2'>").text($(".comment-input2 input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input2 input").val("");
            buttonClicked2 = false;
        }
    };

    $(".comment-input1 button").on("click", function (event) {
        buttonClicked1 = true;
        addCommentFromInputBox(buttonClicked1);
    });

    $(".comment-input1 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            buttonClicked1 = true;
            addCommentFromInputBox(buttonClicked1);
        }
    });

    $(".comment-input2 button").on("click", function (event) {
        buttonClicked2 = true;
        addCommentFromInputBox(buttonClicked2);
    });

    $(".comment-input2 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            buttonClicked2 = true;
            addCommentFromInputBox(buttonClicked2);
        }
    });
};

$(document).ready(main);
