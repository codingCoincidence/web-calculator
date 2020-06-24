function display(e) {
    if (e.target.id.valueOf() == "clear") {
        document.getElementById("display").textContent = "";
    } else {
        document.getElementById("display").textContent += e.target.textContent;
    }
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").textContent);
    } catch {
        alert(document.getElementById("display").textContent + " is an invalid expression, please check your input");
        document.getElementById("display").textContent = "";
        result = "";
    }
    document.getElementById("display").textContent = result;
}