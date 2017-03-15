function ValidationEvent() {
  event.preventDefault();
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var yop = document.getElementById('yop').value;
  var isbn = document.getElementById('isbn').value;
  //console.log(title + " " + author + " " + yop + " " + isbn);

  /*if (title != "" && author != "" && yop != "" && isbn != "") {
    if (yop.length == 4) {
      document.getElementById('title-error').innerHTML = "year of publication filled";
      //alert("year of publication filled");
      return true;
    } else {
      document.getElementById('yop-error').innerHTML = "year of publication should be at least 4 digits";
      //alert("year of publication should be at least 4 digits");
      return false;
    }
  } else {
    document.getElementById('title-error').innerHTML = "Title field is required";
    //alert("all fields are required");
    return false;
  }*/

  if (title == "") {
    document.getElementById('title-error').innerHTML = "Title field is required";
  }
  if (author == "") {
    document.getElementById('author-error').innerHTML = "Author field is required";
  }
  if (yop.length < 4) {
    document.getElementById('yop-error').innerHTML = "Year of publication field is required";
  }
  if (isbn == "") {
    document.getElementById('isbn-error').innerHTML = "Isbn field is required";
  }
}
