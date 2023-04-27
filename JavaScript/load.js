// Load the footer code
fetch('JavaScript/footer.js')
    .then(response => response.text())
    .then(footerCode => {
        // Append the footer code to the footer element
        const footer = document.getElementsByTagName('footer')[0];
        footer.insertAdjacentHTML('beforeend', footerCode);
    });

