const items = document.querySelectorAll('.item');
const infoBox = document.querySelector('.info-box');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        const rect = item.getBoundingClientRect();
        infoBox.innerHTML = `<strong>${item.alt}</strong><br>Autor: ${item.alt.split(' - ')[1] || 'Neznámý autor'}`;
        infoBox.style.left = `${rect.left + rect.width + 10}px`;
        infoBox.style.top = `${rect.top}px`;
        infoBox.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        infoBox.style.display = 'none';
    });

    // Přetahování položek
    let isDragging = false;
    let offsetX, offsetY;

    item.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - item.offsetLeft;
        offsetY = e.clientY - item.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        item.style.left = `${e.clientX - offsetX}px`;
        item.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});