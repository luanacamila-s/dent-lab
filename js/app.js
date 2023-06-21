window.document.addEventListener('scroll', (event) => {
    lastKnownScrollPosition = window.scrollY;
    const nav = document.querySelector('nav')
    console.log(lastKnownScrollPosition);
    if (lastKnownScrollPosition > 10) {
        nav.style.backgroundColor = 'whitesmoke'
    } else {
        console.log("removing");
        nav.style.backgroundColor = 'transparent'
    }
})

const isAuth = localStorage.getItem('authenticated')

if (isAuth) {
    document.querySelector('.login').textContent = "Logado"
}