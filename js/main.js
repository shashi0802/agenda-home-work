// $(function(){
//     var $popdata = $('.information').clone();
//     $('.detail').html($popdata);
//     console.log($popdata);
//   });

  $(document).ready(function(){
      $(".activity-name").click(function(){
          var $popdata = $(this).siblings('.detail-content').clone();
          $('.detail').html($popdata);
          $(".detail").addClass("active");
          console.log($popdata);
      });

      $('.close').on("click", function(){
          $('.detail').removeClass('active');
      });

    // $('.detail').on("click", function(e){
    //     $(this).removeClass('active');
    // });
    
    //   $(".detail-content").on("click",function(e){
    //     e.stopPropagation();
    //   });
  });
  


  