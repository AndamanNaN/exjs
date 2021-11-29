let titles = document.querySelectorAll("h*");
titles.forEach(title => {
    title.innerHTML = title.innerHTML.toUpperCase()
});