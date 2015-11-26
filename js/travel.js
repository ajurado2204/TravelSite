$(document).ready(function(){
  // will open the date picker
  $(".datepicker").pickadate();

  // delete a panel from the modal
  $(".close-modal").on("click", function(){
    $(this).parents(".panel").fadeTo("slow", 0, function(){
      $(this).slideUp("slow", function(){
        $(this).hide();
      });
    });
  });





});