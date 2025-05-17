function compare() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Пожалуйста, введите оба числа!";
      result.className = "result fail";
      result.style.display = "block";
      return;
    }

    if (num1 > num2) {
      result.textContent = "🎉";
      result.className = "result success";
    } else if (num1 < num2) {
      result.textContent = "😢";
      result.className = "result fail";
    } else {
      result.textContent = "Числа равны 🤝";
      result.className = "result success";
    }

    result.style.display = "block";
  }