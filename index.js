let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1;
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.innerHTML = "0"
}


document.getElementById('clear-btn').addEventListener('click', ()=>{
    document.getElementById('save-el').textContent =  '';
    countEl.innerHTML = "0"
    saveEl.innerHTML = "Previous entries : "
})
