const year = new Date().getFullYear();
document.getElementById('copyrightYear').innerText = year;

function(ConversionPercents) {
    ConversionPercents.reduce((a, b) => (a + b)) / ConversionPercents.length;
}