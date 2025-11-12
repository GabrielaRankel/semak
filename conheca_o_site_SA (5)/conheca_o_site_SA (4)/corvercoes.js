function atualizarPlaceholders() {
  const operacao = document.getElementById("operacao").value;
  const v1 = document.getElementById("valor1");
  const v2 = document.getElementById("valor2");

  if (operacao === "potencia") {
    v1.placeholder = "Tensão (V)";
    v2.placeholder = "Corrente (A)";
  } else if (operacao === "tensao") {
    v1.placeholder = "Potência (W)";
    v2.placeholder = "Corrente (A)";
  } else if (operacao === "corrente") {
    v1.placeholder = "Potência (W)";
    v2.placeholder = "Tensão (V)";
  } else if (operacao === "resistencia") {
    v1.placeholder = "Tensão (V)";
    v2.placeholder = "Corrente (A)";
  } else if (operacao === "paralelo") {
    v1.placeholder = "Resistor 1 (Ω)";
    v2.placeholder = "Resistor 2 (Ω)";
  } else if (operacao === "serie") {
    v1.placeholder = "Resistor 1 (Ω)";
    v2.placeholder = "Resistor 2 (Ω)";
  } else {
    v1.placeholder = "Valor 1";
    v2.placeholder = "Valor 2";
  }
}

function calcular() {
  const operacao = document.getElementById("operacao").value;
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(v1) || isNaN(v2)) {
    resultado.innerHTML = " Digite valores válidos!";
    return;
  }

  let res = 0;

  switch (operacao) {
    case "potencia":
      res = v1 * v2;
      resultado.innerHTML = ` Potência = ${res.toFixed(2)} W`;
      break;
    case "tensao":
      res = v1 / v2;
      resultado.innerHTML = ` Tensão = ${res.toFixed(2)} V`;
      break;
    case "corrente":
      res = v1 / v2;
      resultado.innerHTML = ` Corrente = ${res.toFixed(2)} A`;
      break;
    case "resistencia":
      res = v1 / v2;
      resultado.innerHTML = ` Resistência = ${res.toFixed(2)} Ω`;
      break;
    case "paralelo":
      res = 1 / ((1 / v1) + (1 / v2));
      resultado.innerHTML = ` Resistência Equivalente (Paralelo) = ${res.toFixed(2)} Ω`;
      break;
    case "serie":
      res = v1 + v2;
      resultado.innerHTML = ` Resistência Equivalente (Série) = ${res.toFixed(2)} Ω`;
      break;
    default:
      resultado.innerHTML = " Selecione uma operação.";
  }
}
