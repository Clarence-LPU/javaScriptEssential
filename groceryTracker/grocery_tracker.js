function calculate(grocery1, grocery2, grocery3) {
    let total = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `The total amount is:$ ${total}`;
}