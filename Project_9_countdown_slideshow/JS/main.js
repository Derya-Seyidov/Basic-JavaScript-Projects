function countdown() {
  var seconds = document.getElementById("seconds").innerHTML;

  function tick() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;

    var time = setTimeout(tick, 1000);

    if (seconds == -1) {
      alert("Time's up!");
      clearTimeout(time);
      document.getElementById("seconds").innerHTML = "";
    }
  }

  tick();
}
