function appendValue(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('screen').value = '';
}