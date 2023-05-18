// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

// Added Current day with Dayjs 
  var today = dayjs();

  $('#1a').text(today.format('MMM D, YYYY'));
  console.log(today);

  
// added current time with Dayjs
  var today = new Date();
  var time = today.getHours();
  console.log(time);

 

  // Adding a listener for click events on the save button.
    $(".saveBtn").each(function() {
      $(this).on("click", function(){
        // looks into the siblings part text area to save the value to local storage
        // plan in this case is the variable for the text area
        var plan =  $(this).siblings('textarea').val();

        // tells the timeblock  which is a parent, to tell the parent save the atribute value of the id "hour-7" to save to local storage
        var timeBlockParent = $(this).parent().attr('id');
        localStorage.setItem(timeBlockParent, plan);
      })
    })


   

    


   
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

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
    
   

    $.each(localStorage, function(key, value){
      $(`#${key}`).children('textarea').val(value);
    });



    });
  // });




  

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// })
