const liraButton = document.getElementById("lira-button");
const dollarButton = document.getElementById("dollar-button");
const kdButton = document.getElementById("kd-button");

function liraToOtherCurrencies() {
  const currentLira = document.getElementById("1d2lira").value;

  const lira = document.getElementById("lira").value;
  const dollar = lira / currentLira;
  const kd = dollar * 0.3;

  document.getElementById("dollar").value = dollar;
  document.getElementById("kd").value = kd;
}

function dollarToOtherCurrencies() {
  const currentLira = document.getElementById("1d2lira").value;

  const dollar = document.getElementById("dollar").value;

  const lira = dollar * currentLira;
  const kd = dollar * 0.3;

  document.getElementById("lira").value = lira;
  document.getElementById("kd").value = kd;
}

function kdToOtherCurrencies() {
  const currentLira = document.getElementById("1d2lira").value;

  const kd = document.getElementById("kd").value;
  const dollar = kd / 0.3;
  const lira = dollar * currentLira;

  document.getElementById("dollar").value = dollar;
  document.getElementById("lira").value = lira;
}
