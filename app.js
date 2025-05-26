function TempConvert() {
    event.preventDefault();
    let input = document.getElementById('text').value
    let unit = document.getElementById('dropdown').value
    let result;

    if (unit == "C") {
        result = (input * 9 / 5) + 32;
        document.getElementById('para').textContent = `${result} F`;
    }
    else if (unit == "F") {
        result = (input - 32) * 5 / 9;
        document.getElementById('para').textContent = `${result.toFixed(2)} C`;
    }
}