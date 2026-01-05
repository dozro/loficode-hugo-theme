// Matrix rain effect
function createMatrixRain() {
    const matrixRain = document.getElementById('matrixRain');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネäハヒフヘホマミムメモヤユヨラリルレロワヲン';

    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';

        let text = '';
        for (let j = 0; j < 20; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;

        matrixRain.appendChild(column);
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    createMatrixRain();
    setInterval(createParticle, 2000);
});
