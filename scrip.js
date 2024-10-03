const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translayteY = 0
var count = commentItem.length

next.addEventListener('click', function(event) {
    event.preventDefault()
    if(count == 1){
        return false
    }
    translayteY  += -400
    comment.style.transform = `translateY(${translayteY}px)`
    count--
})

prev.addEventListener('click', function(event) {
    event.preventDefault()
    if(count == 5){
        return false
    }
    translayteY  += 400
    comment.style.transform = `translateY(${translayteY}px)`
    count++
}) 