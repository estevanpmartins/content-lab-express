/* Form Submission Redirect*/
submitBtn = document.getElementsByClassName("btn btn-primary");
$(document).ready(function() {
    $(submitBtn).click(function() {
        $(this).toggleClass('active');
        window.setInterval(foo, 3000);
    });
});

function foo() {
    if ( $(submitBtn).hasClass('active') )  {
        window.location.href = "thankyou.html";
    }
    setTimeout(foo, 3000);
}