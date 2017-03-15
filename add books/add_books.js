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

  var titleCheck = true;
  var authorCheck = true;
  var yopCheck = true;
  var isbnCheck = true;

    if (title == "") {
      document.getElementById('title-error').innerHTML = "Title field is required";
      titleCheck = false;
    }
    if (author == "") {
      document.getElementById('author-error').innerHTML = "Author field is required";
      authorCheck = false;
    }
    if (yop.length < 4) {
      document.getElementById('yop-error').innerHTML = "Year of publication field is required";
      yopCheck = false;
    }
    if (isbn == "") {
      document.getElementById('isbn-error').innerHTML = "Isbn field is required";
      isbnCheck = false;
    }

  if (titleCheck == true && authorCheck == true && yopCheck == true && isbnCheck == true) {
    console.log(title + " " + author + " " + yop + " " + isbn);
  }
}
