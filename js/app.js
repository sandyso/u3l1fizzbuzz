$(document).ready(function() {    

    for (var i = 0; i <= 100; i++) {
        console.log(i);
    }

    if (i % 3) {
        (i).replaceWith("Fizz")

    } else if (i % 5) {
    (i).replaceWith("Buzz")

 } else (i % 15) {
    (i).replaceWith("Fizz Buzz")
}
});
