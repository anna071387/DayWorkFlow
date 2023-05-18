// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

// today showd dotays date:
  var today = dayjs();

  $('#1a').text(today.format('MMM D, YYYY'));
  console.log(today);

  
// added current time
  var today = new Date();
  var time = today.getHours();
  console.log(time);




  // var row = "past";
  var description = document.getElementById("description");
  var savebtn = document.getElementById("saveBtn");



      // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



    $(".saveBtn").each(function() {
      $(this).on("click", function(){
        var plan =  $(this).siblings('textarea').val();
        var timeBlockParent = $(this).parent().attr('id');
        localStorage.setItem(timeBlockParent, plan);
      })
    })



   
  // / TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
colorCode();

  function colorCode() {
      $(".time-block").each(function () {
        let timeblock = $(this).attr('id').split('-');
        if (time == timeblock[1]) {
          $(this).children('textarea').removeClass("future")
          $(this).children('textarea').removeClass("past")
          $(this).children('textarea').addClass("present")

        } else if (time < timeblock[1]) {
          $(this).children('textarea').removeClass("present")
          $(this).children('textarea').removeClass("past")
          $(this).children('textarea').addClass("future")

        } else if (time > timeblock[1]) {
          $(this).children('textarea').removeClass("present")
          $(this).children('textarea').removeClass("future")
          $(this).children('textarea').addClass("past")
        }
      })
    }
    });
  // });




  

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// })
