function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["_replyto"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
