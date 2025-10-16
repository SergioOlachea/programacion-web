function calcular() {
            const option = parseInt(document.getElementById("operation").value);
            const a = parseFloat(document.getElementById("num1").value);
            const b = parseFloat(document.getElementById("num2").value);
            const res = document.getElementById("resultado");

            if (isNaN(a) || isNaN(b)) {
                alert("Por favor, ingrese ambos números.");
                return;
            }

            let resultado;

            switch (option) {
                case 1:
                    resultado = a + b;
                    break;
                case 2:
                    resultado = a - b;
                    break;
                case 3:
                    resultado = a * b;
                    break;
                case 4:
                    if (b === 0) {
                        alert("No se puede dividir entre 0");
                        return;
                    }
                    resultado = a / b;
                    break;
                default:
                    alert("Opción inválida");
                    return;
            }

            res.value = resultado;
        }