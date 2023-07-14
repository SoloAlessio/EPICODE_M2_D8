let operator1 = 0;
let operation = null;
let operator2 = 0;
let risultato = 0;

window.onload = function() {
    const numbers = document.querySelectorAll("button:not(.operator)")
    const display = document.querySelector("#display");

    for( const button of numbers ) {
        button.addEventListener("click", function(event) {
            if (!operation) {
                operator1 += event.target.innerText;
                operator1 = parseInt(operator1);
                display.innerHTML = operator1;
            } else{
                operator2 += event.target.innerText;
                operator2 = parseInt(operator2);
                display.innerHTML = operator2;
            }
            
        });
    }

    const operators = document.querySelectorAll(".operator")

    for( const button of operators ) {
        button.addEventListener("click", function(event) {

            if (event.target.innerText === "=") {
                switch(operation) {
                    case "+":
                        risultato = operator1 + operator2;
                        break;
                    
                    case "-":
                        risultato = operator1 - operator2;
                        break;
            
                    case "×":
                        risultato = operator1 * operator2;
                        break;
            
                    case "/":
                        risultato = operator1 / operator2;
                        break;
                    
                    default:
                        alert("Operazione non valida");
                        break;
                }

                display.innerHTML = risultato;
                operator1 = risultato;
                operator2 = 0;

            } else if (event.target.innerText === "C") { 

                operation = null;
                operator1 = 0;
                operator2 = 0;
                display.innerHTML = 0;

            } else {
                operation = event.target.innerText;
            }
        })
    }

    

    

}
