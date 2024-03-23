function downloadCV() {
  var cvPath = "./Syed Inayath_Cv.pdf";

  var link = document.createElement("a");

  link.href = cvPath;

  link.download = "Syed Inayath_Cv.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

$(document).ready(function () {
  $(".progress-bar").each(function () {
    var $bar = $(this);
    var transitionGoal = parseInt($bar.attr("data-transitiongoal"));
    var maxWidth = parseInt($bar.parent().css("width"));
    var width = 0;
    var progress = setInterval(function () {
      width += 1; // Adjust the step size as needed
      if (width >= transitionGoal || width >= maxWidth) {
        clearInterval(progress);
      } else {
        $bar.css("width", width + "%");
      }
    }, 10); // Adjust the interval as needed
  });
});
