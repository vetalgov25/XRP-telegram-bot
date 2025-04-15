let balance = parseFloat(localStorage.getItem("balance")) || 0;
let power = parseFloat(localStorage.getItem("power")) || 1;
let referrals = parseInt(localStorage.getItem("referrals")) || 0;

function updateUI() {
  document.getElementById("balance").innerText = balance.toFixed(2);
  document.getElementById("power").innerText = power;
  document.getElementById("referrals").innerText = referrals;
  localStorage.setItem("balance", balance);
  localStorage.setItem("power", power);
  localStorage.setItem("referrals", referrals);
}

function mine() {
  balance += power;
  updateUI();
}

function upgrade() {
  let cost = power * 10;
  if (balance >= cost) {
    balance -= cost;
    power += 1;
    updateUI();
  } else {
    alert("Недостатньо TON для покращення!");
  }
}

function addReferral() {
  referrals += 1;
  balance += 5;
  updateUI();
}

window.onload = updateUI;
