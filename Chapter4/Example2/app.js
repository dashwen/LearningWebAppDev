/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */


var main = function () {
    'use strict';

    var buttonClicked1 = false;

    var addCommentFromInputBox = function (buttonClicked1) {
        var $newComment;

        if ($('.comment-input1 input').val() !== '' && buttonClicked1 === true) {
            $newComment = $("<p class='User1'>").text($('.comment-input1 input').val());
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $('.comment-input1 input').val('');
            buttonClicked1 = false;
        }

        else if($('.comment-input2 input').val() !== '' && buttonClicked1 === false) {
            $newComment = $("<p class='User2'>").text($('.comment-input2 input').val());
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $('.comment-input2 input').val('');
        }
    };

    $('.comment-input1 button').on('click', function (event) {
        buttonClicked1 = true;
        addCommentFromInputBox(buttonClicked1);
    });

    $('.comment-input1 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            buttonClicked1 = true;
            addCommentFromInputBox(buttonClicked1);
        }
    });

    $('.comment-input2 button').on('click', function (event) {
        buttonClicked1 = false;
        addCommentFromInputBox(buttonClicked1);
    });

    $('.comment-input2 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            buttonClicked1 = false;
            addCommentFromInputBox(buttonClicked1);
        }
    });
};

$(document).ready(main);
