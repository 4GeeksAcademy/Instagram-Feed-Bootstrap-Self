document.getElementById("grid-picture").addEventListener("click", function() {
    var grid = document.getElementById("grid-div");
    var one = document.getElementById("one-div");
    if (grid.style.display === "block") {
        grid.style.display = "block";
      } else {
        one.style.display = "none";
        grid.style.display = "block";
      }
});
  
document.getElementById("one-picture").addEventListener("click", function() {
    var grid = document.getElementById("grid-div");
    var one = document.getElementById("one-div");
    if (one.style.display === "block") {
        one.style.display = "block";
      } else {
        grid.style.display = "none";
        one.style.display = "block";
      }
});

