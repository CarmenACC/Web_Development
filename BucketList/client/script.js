//this means regarding the entire list, when a list item is clicked
//mark it "completed" at which time the stylesheet changes it to have a line through it
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
})

//regarding the entire list when you click on the trashcan of a line item
//it will remove the item from the list
$('ul').on('click', "span", function(){
    $(this).parent().remove();
});

//
$("input").keypress(function(event){
    if (event.which === 13 && $(this).val().trim()) {
      let listItem = $(this).val();
      $("ul").append(
   `<li>
     ${listItem}
      <span>
      <i class="fa fa-trash-alt"></i>
      </span>
    </li>`
);
$(this).val("")
    }
});
