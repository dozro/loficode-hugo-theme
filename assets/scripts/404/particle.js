// Floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    particle.style.color = Math.random() > 0.5 ? 'var(--accent-primary)' : 'var(--accent-secondary)';
    particle.style.animationDuration = (Math.random() * 10 + 5) + 's';

    const symbols = ['{}', '[]', '()', '<>', '/>', '&&', '||', '==', '!=', '++', '--', '=>'];
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 15000);
}