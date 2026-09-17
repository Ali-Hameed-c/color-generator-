const btn = document.getElementById('btn');
const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');

// دالة لتوليد لون عشوائي بصيغة Hex
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// الحدث عند الضغط على الزر
btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
});
