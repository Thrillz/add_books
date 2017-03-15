function ValidationEvent() {
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var yop = document.getElementById('yop').value;
  var isbn = document.getElementById('isbn').value;

  if (title != "" && author != "" && yop != "" && isbn != "") {
    if (yop.length == 4) {
      alert("year of publication filled");
      return true;
    } else {
      alert("year of publication should be at least 4 digits");
      return false;
    }
  } else {
    alert("all fields are required");
    return false;
  }
}
