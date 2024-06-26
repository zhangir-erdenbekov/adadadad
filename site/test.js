let but = document.querySelector('.button')
but.addEventListener('click', function(){
    but.innerHTML = 'never gonna give you up'
    setTimeout(function(){
        window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }, 3000)
})