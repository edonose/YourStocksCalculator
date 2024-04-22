document.getElementById("calc1").addEventListener("click", calc1);

function calc1() {
  var startValue = +document.getElementById("input1").value;
  var percent1 = +document.getElementById("p1").value;
  percent1 = percent1 / 100 + 1;
  var percent2 = +document.getElementById("p2").value;
  percent2 = percent2 / 100 + 1;
  var percent3 = +document.getElementById("p3").value;
  percent3 = percent3 / 100 + 1;

  var output = startValue * percent1 * percent2 * percent3;
  output = output.toFixed(2);

  document.getElementById("Output1").innerHTML = output;
  document.getElementById("Output1").style.fontWeight = "bold";
  document.getElementById("size1").style.color = "black";
}
document.getElementById("Clear1").addEventListener("click", reset);
document.getElementById("Clear2").addEventListener("click", reset);

function reset() {
  location.reload();
}

document.getElementById("btn2").addEventListener("click", calc2);

function calc2() {
  var Val1 = +document.getElementById("input2").value;
  var Val2 = +document.getElementById("input3").value;

  var output = ((Val2 - Val1) / Val1) * 100;

  output = output.toFixed(3);

  document.getElementById("output2").innerHTML = output;
  document.getElementById("output2").style.fontWeight = "bold";
  document.getElementById("size2").style.color = "black";
}
