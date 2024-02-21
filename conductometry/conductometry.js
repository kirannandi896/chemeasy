function calculateConductometry(){
  var c1 = document.getElementById("con1").value;
  var c2 = document.getElementById("con2").value;
  var v1 = document.getElementById("vol1").value;
  var v2 = document.getElementById("vol2").value;
  var k1 = 0.0221;
  var mytable = "<table cellpadding=\"0\" cellspacing=\"0\"><tbody><tr>";

  for (var i = 0; i <= v1 ; i+=0.2) {
    mytable += "</tr><tr>";
    mytable += "<td>[" + i.toFixed(1) + "]</td>";
  }

  mytable += "</tr></tbody></table>";

  document.getElementById("result").innerHTML = mytable;
}