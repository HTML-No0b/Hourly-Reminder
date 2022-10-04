$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {

        console.log(this);
        var text = $(this).siblings(".eventdetails").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    $("#hour9 .eventdetails").val(localStorage.getItem("hour9"));
    $("#hour10 .eventdetails").val(localStorage.getItem("hour10"));
    $("#hour11 .eventdetails").val(localStorage.getItem("hour11"));
    $("#hour12 .eventdetails").val(localStorage.getItem("hour12"));
    $("#hour13 .eventdetails").val(localStorage.getItem("hour13"));
    $("#hour14 .eventdetails").val(localStorage.getItem("hour14"));
    $("#hour15 .eventdetails").val(localStorage.getItem("hour15"));
    $("#hour16 .eventdetails").val(localStorage.getItem("hour16"));
    $("#hour17 .eventdetails").val(localStorage.getItem("hour17"));

    function hourTracker() {
        var currentHour = moment().hour();


        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            // var blockHour = parseInt($(this).attr("id"));
            console.log(blockHour)


            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass(".future");
                $(this).removeClass(".present");
            }
        
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})