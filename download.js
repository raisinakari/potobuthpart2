const canvas = document.getElementById('finalCanvas');
const ctx = canvas.getContext('2d');

// Placeholder image (replace with the actual user photo source if dynamic)
const userImage = new Image();
userImage.src = 'camera.png'; // Replace with actual photo if needed
userImage.onload = () => {
    ctx.drawImage(userImage, 50, 25, 300, 250); // Adjust as necessary
};

// Frame overlay logic
const buttons = document.querySelectorAll('.color-btn');
let frameOverlay = new Image();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove previous selection
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        // Load new frame
        const frameSrc = button.getAttribute('data-color');
        frameOverlay.src = frameSrc;
    });
});

frameOverlay.onload = () => {
    // Redraw user image and apply frame overlay
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(userImage, 50, 25, 300, 250);
    ctx.drawImage(frameOverlay, 0, 0, canvas.width, canvas.height);
};

// Download button functionality
document.getElementById('download-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'RaizenAeonieStudio_Photo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
