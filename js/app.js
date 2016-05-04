
$(document).ready(function () {

    for (var i = 1; i <= 100; i++) {
        $('.fb-list').append('<li>' + i + '</li>');

        if (i % 3 === 0) {
        	$('ul').append('fizz');
        }

        if (i % 5 === 0) {
            $('ul').append('buzz');
        }

        if (i % 3 && i % 5 === 0) {
            $('ul').append('fizzbuzz');
        }

    }
});