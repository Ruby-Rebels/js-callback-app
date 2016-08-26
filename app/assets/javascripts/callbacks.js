function changeColors() {
  setTimeout(function() {
    document.getElementById('first').style.color = "red";
    setTimeout(function() {
      document.getElementById('second').style.color = "green";
    }, 1000)
  }, 1000)
}
