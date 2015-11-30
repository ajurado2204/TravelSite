$(document).ready(function(){
  // will open the date picker

  var $checkoutPicker = $(".datepicker.checkout").pickadate();
  var mypicker = $checkoutPicker.pickadate('picker');
  mypicker.set('disable', true);

  var $checkinPicker = $(".datepicker.checkin").pickadate();
  var myOtherPicker = $checkinPicker.pickadate('picker');
  myOtherPicker.set('min', new Date());

  var firstSelectedDate;
  var secondSelectedDate;

  myOtherPicker.on({
    open: function(){
      mypicker.set('disable', false);
    },
    set: function(thingSet) {
      mypicker.set('min', new Date());
      firstSelectedDate = new Date(thingSet.select);
    },
    close: function(){
      mypicker.on({
        set: function(thingSet) {
          secondSelectedDate = new Date(thingSet.select);
          if(secondSelectedDate < firstSelectedDate){
            alert("Please select a date after check-in.");
            mypicker.clear();
          }
        }
      });
    },

  });

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

  $("#searchBtn").on("click", function(){
    var citySelect = $(".form-control").val();
    $(".panel").hide();

    switch (citySelect) {
      case "New York City, NY":
        $(".newYorkPanel").show();
        break;

      case "Hoboken, NJ":
        $(".newJerseyPanel").show();
        break;
        
      case "Chicago, IL":
        $(".chicagoPanel").show();
        break;
        
      case "Los Angeles, CA":
        $(".laPanel").show();
        break;
        
      case "San Fransisco, CA":
        $(".sfPanel").show();
        break;

      case "Miami, FL":
        $(".miamiPanel").show();
        break;
    };
  });

  

  $(".dropdown-menu li a").on("click",function(){
    $(this).parents(".btn-group").find('.btn.btn-default.dropdown-toggle').text($(this).text()).append('  <span class="caret"></span>');
    $(this).parents(".btn-group").find('.btn.btn-default.dropdown-toggle').val($(this).text());
  });

  $(".panel").on("click", ".btn-info", function() {
    $(this).parent().next(".panel-footer").collapse("toggle");
});


});