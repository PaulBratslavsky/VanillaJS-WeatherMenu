function showError(message = 'Error') {
    const input = document.getElementById('city');
    // console.error('error');
    input.classList.add('error');
    input.style.background = '#EC6E4C';
    input.style.color = 'white';
    // input.value = message;
    input.setAttribute("placeholder", message);
}

function clearError() {
    const input = document.getElementById('city');
    input.classList.remove('error');
    input.style.background = 'white';
    input.style.color = '#3D3F3A';
    // input.value = '';
    input.setAttribute("placeholder", 'Enter City');

}