const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item  = document.getElementsByTagName('span')[3].innerText
    console.log(item.innerText)
    item.innerText = 'Kramarenko'

function find_edit(){
    const item  = document.getElementsByTagName('span')[4].innerText
    console.log(item.innerText)
    item.innerText = 'Polina'

function find_edit(){
    const item  = document.getElementsByTagName('span')[5].innerText
    console.log(item.innerText)
    item.innerText = 'Vitalievna'
}

node_for_click.addEventListener("click",find_edit)
