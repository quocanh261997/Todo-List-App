//Check off specific Todos by clicking
$("ul").on("click","li",function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(1000,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
  if (event.which===13){
    var todoText = $(this).val();
    $(this).val("");
    //Create new li
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+todoText+"</li>");

  }
});

$(".fa-plus").on("click",function(){
  $("input[type='text']").fadeToggle(500,"linear");
});
