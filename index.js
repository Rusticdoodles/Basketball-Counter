let counterHomeEl = document.getElementById("counter-home-el")
let counterGuestEl = document.getElementById("counter-guest-el")

let countHome = 0
let countGuest = 0

// console.log(counterHomeEl)
// console.log(counterGuestEl)

function add1PointHome() {
    countHome += 1
    counterHomeEl.innerText = countHome
}

// add1PointHome()

function add2PointHome() {
    countHome += 2
    counterHomeEl.innerText = countHome
}

function add3PointHome() {
    countHome += 3
    counterHomeEl.innerText = countHome
}

function add1PointGuest() {
    countGuest += 1
    counterGuestEl.innerText = countGuest
}

function add2PointGuest() {
    countGuest += 2
    counterGuestEl.innerText = countGuest
}

function add3PointGuest() {
    countGuest += 3
    counterGuestEl.innerText = countGuest
}