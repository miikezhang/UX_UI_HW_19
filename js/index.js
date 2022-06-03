$(document).ready(function() {
    $("#workDrop").hover(
        function() {
            $('.workList').stop(true, true).slideDown('medium');
        },
        function() {
            $('.workList').stop(true, true).slideUp('medium');
        }
    );
});