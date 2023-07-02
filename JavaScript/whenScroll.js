window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".nav-logo img").style.width = "70px"; /* Adjust the width as desired */
      document.getElementById("navbar").style.paddingTop = "10px"; /* Adjust the padding as desired */

    } else {
      document.querySelector(".nav-logo img").style.width = "90px"; /* Adjust the width as desired */
      document.getElementById("navbar").style.paddingTop = "0px"; /* Adjust the padding as desired */

    }
  }
  