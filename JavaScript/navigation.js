function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.querySelector('#content').innerHTML = html;
        })
        .catch(error => console.error(error));
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // prevent default behavior of link
        const page = event.target.getAttribute('href');
        loadPage(page);
    });
});
