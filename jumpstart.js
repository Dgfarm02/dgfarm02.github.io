// User iooks through the td elements and for a groundhog
// If they find the groundhog with the shadow they lose
// Find the groundhog without the shadow they win
// If they dont find the groundhog they find a hole they lose
var randomNum1 = Math.ceil(Math.random() * 9)
var randomNum2 = Math.ceil(Math.random() * 9)

const emojiMaker =(id) => {
    if (id === randomNum1) {
    alert('You found the groundhog you win!!')
    return document.getElementById(id).innerHTML = ("🐿")
    } else if (id === randomNum2) {
    alert('Oh no... you found the bomb! You lose!')  
    return document.getElementById(id).innerHTML = ("💣")
    } else {
    return document.getElementById(id).innerHTML = ("🕳")
    }
}