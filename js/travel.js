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

  //remove panel(s) from the modal based on preference

  $(".checkNjBtn").on("click",function(){
    $(".newYorkPanel").toggle(1000);
  });

  $(".checkNyBtn").on("click",function(){
    $(".newJerseyPanel").toggle(2000);
  });

  

  $(".dropdown-menu li a").on("click",function(){
    $(this).parents(".btn-group").find('.btn.btn-default.dropdown-toggle').text($(this).text()).append('  <span class="caret"></span>');
    $(this).parents(".btn-group").find('.btn.btn-default.dropdown-toggle').val($(this).text());
  });



});