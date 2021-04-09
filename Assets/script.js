$(document).ready(function () {
    
    //gives current date
    var d = new Date();
        $("#currentDay").text(d.toLocaleDateString());
    //gives hours in military time    
    var hour = d.getHours();
        if(hour === 9) {
            $("#nine").addClass("current");
        }
        else if(hour === 10) {
            $("#ten").addClass("current");
        }
        else if(hour === 11) {
            $("#eleven").addClass("current");
        }
        else if(hour === 12) {
            $("#twelve").addClass("current");
        }
        else if(hour === 13) {
            $("#onePm").addClass("current");
        }
        else if(hour === 14) {
            $("#twoPm").addClass("current");
        }
        else if(hour === 15) {
            $("#threePm").addClass("current");
        }
        else if(hour === 16) {
            $("#fourPm").addClass("current");
        }
        else if(hour === 17) {
            $("#fivePm").addClass("current");
        }
        else if(hour === 18) {
            $("#sixPm").addClass("current");
        }

    //pullS from local storage, render on page
    var sixPm = localStorage.getItem("sixPm");
    if(sixPm) {
        $("#sixPm textarea").val(sixPm);
    }

    var fivePm = localStorage.getItem("fivePm");
    if(fivePm) {
        $("#fivePm textarea").val(fivePm);
    }

    var fourPm = localStorage.getItem("fourPm");
    if(fourPm) {
        $("#sixPm textarea").val(fourPm);
    }

    var threePm = localStorage.getItem("threePm");
    if(threePm) {
        $("#threePm textarea").val(threePm);
    }

    var twoPm = localStorage.getItem("twoPm");
    if(twoPm) {
        $("#twoPm textarea").val(twoPm);
    } 

    var onePm = localStorage.getItem("onePm");
    if(onePm) {
        $("#onePm textarea").val(onePm);
    }

    var twelve = localStorage.getItem("twelve");
    if(twelve) {
        $("#twelve textarea").val(twelve);
    } 

    var eleven = localStorage.getItem("eleven");
    if(eleven) {
        $("#eleven textarea").val(eleven);
    } 

    var ten = localStorage.getItem("ten");
    if(ten) {
        $("#ten textarea").val(ten);
    }
    
    var nine = localStorage.getItem("nine");
    if(nine) {
        $("#nine textarea").val(nine);
    }
    

    $('.saveBtn').on('click', function () {
        console.log('click');
        var textValue = $(this).siblings(".description").val();
        var textTime = $(this).parent().attr('id');
        localStorage.setItem(textTime, textValue);
    });
    $('.saveBtn').on('dblclick', function () {
        // double quotes erase whatever is in text area
        $(this).siblings(".description").val("");
        var textTime = $(this).parent().attr('id');
        localStorage.removeItem(textTime);
        console.log('dblclick');
    });
});
