const display = document.getElementById("display");
let expression = "";

const button=document.getElementById("buttons").addEventListener("click",(e)=>{
    if(!e.target.classList.contains("btn"))  return;
    const value=e.target.textContent;

    if (value === "=") {
    const result = evaluateExpression(expression);
    display.textContent = result;
    expression = result.toString();
  } else if (value === "AC") {
    expression = "";
    display.textContent = "0";
  } else if (value === "<--") {
    expression = expression.slice(0, -1);
    display.textContent = expression || "0";
  } else {
    expression += value;
    display.textContent = expression;
  }
})

function evaluateExpression(expr) {
  try {
    // Replace × and ÷ if you're using those symbols
    expr = expr.replace(/×/g, '*').replace(/÷/g, '/');

    // Basic safe evaluation using Function constructor
    const result = new Function('return ' + expr)();
    return Number.isFinite(result) ? result : "Error";
  } catch (e) {
    return "Error";
  }
}