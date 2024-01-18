var form1 = document.getElementsByClassName("bookform-1a")[0];
var form2 = document.getElementsByClassName("bookform-1b")[0];

    function swapForm(choice) {
    if (choice == 0) {
        form2.style.display = "none";
        form1.style.display = "flex"; 
    }

    if (choice == 1) {
        form2.style.display = "flex"; 
        form1.style.display = "none";
    }
}

swapForm(0);