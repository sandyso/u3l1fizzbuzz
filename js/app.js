$(document).ready(function() {


        for (var i = 1; i <= 100; i++) {
            $('.fb-list').append('<li>' + i + '</li>');

            if (i % 3 === 0) {
                $('.fb-list').append('fizz');
            }

            if (i % 5 === 0) {
                $('.fb-list').append('buzz');
            }

            if (i % 15 === 0) {
                $('.fb-list').append('fizzbuzz');
            }

        }
});
