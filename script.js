document.querySelectorAll('label').forEach(label => {
    label.innerHTML = label.innerText.split('').map(
        (letter, i) => `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
    ).join('');
});

function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        btn.textContent = "Hide";
    } else {
        input.type = "password";
        btn.textContent = "Show";
    }
}

