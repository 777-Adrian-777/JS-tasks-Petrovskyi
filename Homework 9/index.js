//Task 1

//Task1
$("a[href^='https://']").attr('target', '_blank');

//Task2
$("h2.head")
  .css("background-color", "green")
  .find(".inner")
  .css("font-size", "35px");

//Task3
$("h3")
  .next("div")
  .each(function () {
    $(this).insertBefore($(this).prev("h3"));
  });

//Task4
$(".checkboxClass").on("click", function () {
  if ($(".checkboxClass:checked").length >= 3) {
    $(".checkboxClass").attr("disabled", "disabled");
  }
});
