var b = false,
  num = 0,
  num1 = 0,
  opt,
  ans = 0,
  p = false,
  pvar = 1;
function Number(z) {
  switch (b) {
    case true:
      if (p) {
        pvar /= 10;
        z *= pvar;
      } else num1 *= 10;
      num1 += z;
      document.getElementById("screen").innerHTML = num1;
      break;
    case false:
      if (p) {
        pvar /= 10;
        z *= pvar;
      } else num *= 10;
      num += z;
      document.getElementById("screen").innerHTML = num;
  }
}
function ac() {
  num1 = 0;
  num = 0;
  b = false;
  p = false;
  pvar = 1;
  document.getElementById("screen").innerHTML = "";
}
function operation(z) {
  switch (z) {
    case 1:
      opt = z;
      break;
    case 2:
      opt = z;
      break;
    case 3:
      opt = z;
      break;
    case 4:
      opt = z;
      break;
    case 5:
      opt = z;
  }
  document.getElementById("screen").innerHTML = "";
  b = true;
  p = false;
  pvar = 1;
}
function equal() {
  switch (opt) {
    case 1:
      ans = num + num1;
      break;
    case 2:
      ans = num - num1;
      break;
    case 3:
      ans = num * num1;
      break;
    case 4:
      ans = num / num1;
      break;
    case 5:
      ans = (num * num1) / 100;
  }
  b = false;
  p = false;
  pvar = 1;
  document.getElementById("screen").innerHTML = ans;
  num = ans;
  num1 = 0;
}
function pm() {
  if (b) {
    num1 *= -1;
    document.getElementById("screen").innerHTML = num1;
  } else {
    num *= -1;
    document.getElementById("screen").innerHTML = num;
  }
}
function point() {
  p = true;
}
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule(
    "https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js"
  );
}
