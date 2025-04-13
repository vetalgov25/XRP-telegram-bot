
let balance = 0;

document.getElementById("mineBtn").addEventListener("click", () => {
  balance += Math.floor(Math.random() * 5) + 1; // добавляем от 1 до 5 XRP
  document.getElementById("balance").innerText = balance;
});

document.getElementById("convertBtn").addEventListener("click", () => {
  if (balance >= 10) {
    balance -= 10;
    alert("Вы успешно конвертировали 10 XRP в 1 TON!");
  } else {
    alert("Недостаточно XRP для конвертации.");
  }
  document.getElementById("balance").innerText = balance;
});
