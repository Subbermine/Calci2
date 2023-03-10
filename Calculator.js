var b = false,
  num = 0,
  num1 = 0,
  opt,
  ans = 0,
  p,
  pvar = 1;
function Number(z) {
  if (b) {
    num1 *= 10;
    num1 += z;
    document.getElementById("screen").innerHTML = num1;
  } else {
    num *= 10;
    num += z;
    document.getElementById("screen").innerHTML = num;
  }
}
function ac() {
  num1 = 0;
  num = 0;
  b = false;
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
  document.getElementById("screen").innerHTML = ans;
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
