function downloadCV() {
  var cvPath = "./Syed Inayath_Cv.pdf";

  var link = document.createElement("a");

  link.href = cvPath;

  link.download = "Syed Inayath_Cv.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}
