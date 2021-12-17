

/** Scroll behavior of navbar **/

window.onscroll = function () { scrollFunction() };

function vh() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function scrollFunction() {
    if (document.documentElement.clientWidth < 992 || window.innerWidth < 992) return
    const navbar = document.getElementById("navbar")
    if (document.body.scrollTop > vh() || document.documentElement.scrollTop > vh())
        navbar.classList.remove('bg-transparent')
    else
        navbar.classList.add('bg-transparent')
}

(function () {
    const navbar = document.getElementById('navbar')
    if (document.documentElement.clientWidth >= 992 || window.innerWidth >= 992)
        navbar.classList.add('bg-transparent')
    // toggle navbar on smaller screens if a link is clicked.
})()