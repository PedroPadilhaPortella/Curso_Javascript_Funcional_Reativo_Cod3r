function executar(fn , a, b) {
    return fn(a, b);
}

const somarNoTerminal = (a, b) => console.log(a + b); 

const subtrairNoTerminal = (a, b) => console.log(a - b); 


executar(somarNoTerminal, 56, 38);
executar(subtrairNoTerminal, 182, 78);