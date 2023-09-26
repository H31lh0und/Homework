const node_for_click_all = document.getElementById("click")

function find_edit_all(){
    //const item  = document.getElementsByTagName('p')[0]
    //console.log(item.innerText)
   //item.innerText = 'новое Имя Ivan'

    document.getElementsByTagName('span')[3].innerText='Kramarenko'
    document.getElementsByTagName('span')[4].innerText='Polina'
    document.getElementsByTagName('span')[5].innerHTML='Vitalievna'

}
node_for_click_all.addEventListener("click",find_edit_all)
